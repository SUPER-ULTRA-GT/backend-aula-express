const supabase = require('../database/supabaseClient');

// Funções similares ao Sequelize para a tabela "teste"
const Teste = {
    // Criar um novo registro (similar ao Model.create do Sequelize)
    async create(dados) {
        const { data, error } = await supabase
            .from('teste')
            .insert([dados])
            .select();

        if (error) throw error;
        return data[0];
    },

    // Buscar todos (similar ao Model.findAll do Sequelize)
    async findAll() {
        const { data, error } = await supabase
            .from('teste')
            .select('*');

        if (error) throw error;
        return data;
    },

    // Buscar por id (similar ao Model.findByPk do Sequelize)
    async findByPk(id) {
        const { data, error } = await supabase
            .from('teste')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    },

    // Atualizar (similar ao Model.update do Sequelize)
    async update(dados, id) {
        const { data, error } = await supabase
            .from('teste')
            .update(dados)
            .eq('id', id)
            .select();

        if (error) throw error;
        return data[0];
    },

    // Deletar (similar ao Model.destroy do Sequelize)
    async destroy(id) {
        const { error } = await supabase
            .from('teste')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return true;
    }
};

module.exports = Teste; 