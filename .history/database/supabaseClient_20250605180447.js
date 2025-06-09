const { createClient } = require('@supabase/supabase-js');

require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const chaveApi = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, chaveApi);