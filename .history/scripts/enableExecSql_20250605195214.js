const supabase = require('../database/supabaseClient');

const enableExecSql = async () => {
    try {
        // SQL para criar a função exec_sql
        const sql = `
            create or replace function exec_sql(query text)
            returns void as $$
            begin
                execute query;
            end;
            $$ language plpgsql security definer;
        `;

        // Executar o SQL diretamente
        const { error } = await supabase
            .from('_exec_sql')  // Tabela temporária para executar SQL
            .select()
            .eq('query', sql)
            .maybeSingle();

        if (error) {
            console.error('Erro ao criar função:', error);
            return;
        }

        console.log('Função exec_sql habilitada com sucesso!');
    } catch (err) {
        console.error('Erro:', err);
    }
};

// Executar a função
enableExecSql(); 