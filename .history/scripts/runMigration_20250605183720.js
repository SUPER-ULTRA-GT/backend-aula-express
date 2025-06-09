const fs = require('node:fs');
const path = require('node:path');
const supabase = require('../database/supabaseClient');

async function runMigration() {
    try {
        // Lê o arquivo SQL
        const sqlFile = path.join(__dirname, '../migrations/create_teste_table.sql');
        const sqlQuery = fs.readFileSync(sqlFile, 'utf8');

        // Executa a query SQL
        const { data, error } = await supabase.rpc('exec_sql', { query: sqlQuery });

        if (error) {
            console.error('Erro ao executar migração:', error);
            return;
        }

        console.log('Tabela criada com sucesso!');
    } catch (err) {
        console.error('Erro:', err);
    }
}

runMigration(); 