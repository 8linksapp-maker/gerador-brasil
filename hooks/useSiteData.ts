import { useState, useEffect } from 'react';
import { supabase, isCMSConnected } from '../lib/supabaseClient';
import { defaultSiteData } from '../config/siteConfig';
import type { SiteData } from '../types/siteData';

// Função para buscar dados do Supabase
const fetchSiteData = async (domain: string): Promise<SiteData | null> => {
  if (!supabase) return null;

  try {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        pages (*),
        services (*),
        locations (*),
        media (*)
      `)
      .eq('domain', domain)
      .single();

    if (error) {
      console.warn('Erro ao buscar dados do CMS, usando fallback local:', error.message);
      return null;
    }

    if (!data) return null;

    // Transform Snake_case (DB) to CamelCase (App)
    const siteData: SiteData = {
      id: data.id,
      domain: data.domain,
      settings: data.settings,
      seo: data.seo,
      pages: {
        home: data.pages.find((p: any) => p.slug === 'home')?.content || defaultSiteData.pages.home
      },
      services: (data.services || []).sort((a:any, b:any) => (a.sort_order || 0) - (b.sort_order || 0)).map((s: any) => ({
        id: s.id,
        slug: s.slug,
        name: s.name,
        headline: s.headline,
        description: s.description,
        shortDescription: s.short_description,
        benefits: s.benefits || [],
        howItWorks: s.how_it_works || [],
        faqs: s.faqs || [],
        ctaText: s.cta_text || 'Solicitar Orçamento',
        image: s.image_url
      })),
      locations: data.locations || [],
      media: {
        heroImages: (data.media || []).filter((m: any) => m.category === 'hero'),
        serviceImages: (data.media || []).filter((m: any) => m.category === 'service').reduce((acc: any, m: any) => {
          if (m.service_slug) acc[m.service_slug] = { url: m.url, alt: m.alt || '' };
          return acc;
        }, {})
      }
    };

    return siteData;
  } catch (err) {
    console.warn('Falha na conexão com CMS, usando fallback local', err);
    return null;
  }
};

export const useSiteData = () => {
  const [siteData, setSiteData] = useState<SiteData>(defaultSiteData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Se não estiver conectado, usa local imediatamente
    if (!isCMSConnected()) {
      setIsLoading(false);
      return;
    }

    const env = (import.meta as any).env || {};
    const domain = window.location.hostname === 'localhost' 
      ? (env.VITE_SITE_DOMAIN || 'www.geradoresbrasil.com.br') // Dev override
      : window.location.hostname;
    
    fetchSiteData(domain)
      .then((data) => {
        if (data) {
          setSiteData(data);
        } else {
          // Mantém o defaultSiteData se a busca falhar ou retornar null
          console.log('Usando dados locais (fallback).');
        }
      })
      .catch((err) => {
        console.error('Erro no hook useSiteData:', err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { data: siteData, isLoading, error };
};