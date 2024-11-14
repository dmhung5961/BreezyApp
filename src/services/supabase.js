import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wlejnbqqconftcaabzkk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZWpuYnFxY29uZnRjYWFiemtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5MzU5NjQsImV4cCI6MjAzMTUxMTk2NH0.ONqibwS3lzwlvWehjWSjnQ2P9s_55vH5qW_ushKEVBw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
