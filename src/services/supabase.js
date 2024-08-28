import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fprdrlzgjszxnwdhwzpq.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwcmRybHpnanN6eG53ZGh3enBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2OTUxODksImV4cCI6MjA0MDI3MTE4OX0._ZKH400VM-mlZZseUmNqYfw-j1x9wC6ka0SulrlEku0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;