import { useEffect } from 'react';
import { useSiteData } from './useSiteData';

export const useDynamicColors = () => {
  const { data: site } = useSiteData();
  
  useEffect(() => {
    const { colors } = site.settings;
    const root = document.documentElement;
    
    // Set base colors
    root.style.setProperty('--site-primary', colors.primary);
    root.style.setProperty('--site-secondary', colors.secondary);
    root.style.setProperty('--site-accent', colors.accent);
    root.style.setProperty('--site-background', colors.background);
    root.style.setProperty('--site-foreground', colors.foreground);

  }, [site.settings.colors]);
};