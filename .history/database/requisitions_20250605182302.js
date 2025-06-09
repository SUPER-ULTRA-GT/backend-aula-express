const supabase = require("./supabaseClient");

async function getCoffeeBreak() {
        const { data, error } = await supabase
            .from('coffe_sexta')
            .select('*');

        if (error) {
            console.error('Erro ao buscar dados da tabela:', error);
            return null;
        }

        console.log('Dados da tabela:', data);
        return data;

}

module.exports = getCoffeeBreak();