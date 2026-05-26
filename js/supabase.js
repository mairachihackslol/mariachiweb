// EDITAR AQUÍ CON TUS CREDENCIALES DE SUPABASE
const SUPABASE_URL = 'https://dizkxassmvytjrccjwbl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpemt4YXNzbXZ5dGpyY2Nqd2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NTA0MDIsImV4cCI6MjA5NTMyNjQwMn0.okVXducVb1iNocIVay_cPSGYV-bu4XtPVjEBEEn1jyg';

const { createClient } = supabase;
window.m7Supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('✅ MARIACHI HACKS: Cliente de Supabase conectado');