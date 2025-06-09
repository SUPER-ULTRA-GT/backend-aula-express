import { supabase } from "./supabaseClient";

async function getCoffeeBreak () {
    try {
        const { data, error } = await supabase
            .from('coffe_sexta')
            .select('*');

        if (error) {
            console.error('Erro ao buscar dados da tabela:', error);
            return null;
        }

        console.log('Dados da tabela:', data);
        return data;
    } catch(error) {
        console.error('Ocorreu um erro:', error);
        return null;
    }
}

get