const supabase = require('../database/supabaseClient');

async function addColumn() {
    try {
        const { data, error } = await supabase
            .rpc('exec_sql', {
                query: 'alter table if exists teste add column if not exists coluna_teste text;'
            });

        if (error) {
            console.error('Erro ao adicionar coluna:', error);
            return;
        }

        console.log('Coluna adicionada com sucesso!');
    } catch (err) {
        console.error('Erro:', err);
    }
}

addColumn(); 