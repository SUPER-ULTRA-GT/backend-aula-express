const supabase = require('../database/supabaseClient');

// Função para inserir um novo registro
async function createTeste(coluna_teste) {
  const { data, error } = await supabase
    .from('teste')
    .insert([{ coluna_teste }])
    .select();
  
  if (error) throw error;
  return data;
}

// Função para buscar todos os registros
async function getAllTestes() {
  const { data, error } = await supabase
    .from('teste')
    .select('*');
  
  if (error) throw error;
  return data;
}

// Função para atualizar um registro
async function updateTeste(id, coluna_teste) {
  const { data, error } = await supabase
    .from('teste')
    .update({ coluna_teste })
    .eq('id', id)
    .select();
  
  if (error) throw error;
  return data;
}

// Função para deletar um registro
async function deleteTeste(id) {
  const { error } = await supabase
    .from('teste')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
  return true;
}

module.exports = {
  createTeste,
  getAllTestes,
  updateTeste,
  deleteTeste
}; 