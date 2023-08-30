import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gvibqhqcwgfuatzepqik.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2aWJxaHFjd2dmdWF0emVwcWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzNTQzNTYsImV4cCI6MjAwODkzMDM1Nn0.EyoKaGZuD3gttPsfO6fQ1acWnaje3QLSW8-JaH7Ii38";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
