import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://rakgqlwpnfknfbuirpbb.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJha2dxbHdwbmZrbmZidWlycGJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNDYyMjksImV4cCI6MjA4ODYyMjIyOX0.YfZsQykbisf8aJ3N1j9yw60-L3hIw7g893KvghD5qM4"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)