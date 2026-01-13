// ═══════════════════════════════════════════════════════════════
// Supabase Client Configuration
// ═══════════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

// Safely access env to support environments where import.meta.env might be undefined
const env = (import.meta as any).env || {};
const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase credentials not found. Using local fallback data.',
    'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env'
  );
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Função auxiliar para verificar se CMS está conectado
export const isCMSConnected = () => !!supabase;