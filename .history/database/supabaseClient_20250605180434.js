const { createClient } = require('@supabase/supabase-js');

require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL as string;
const chaveApi = process.env.SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, chaveApi);