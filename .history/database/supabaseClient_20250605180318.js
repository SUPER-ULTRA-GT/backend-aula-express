const { createClient } = require('@supabase/supabase-js');

require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL
const chaveApi = process.env.SUPABASE_KEY

createClient(supabaseUrl, chaveApi)