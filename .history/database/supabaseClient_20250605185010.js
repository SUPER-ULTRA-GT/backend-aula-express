const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;

 async create(dados) {
        const { data, error } = await supabase
            .from('teste')
            .insert([dados])
            .select();

        if (error) throw error;
        return data[0];
    },