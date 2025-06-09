const { define, DataTypes } = require('../utils/defineTable');

// Muito similar ao Sequelize!
const Teste = await define('teste', {
    coluna_teste: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN
});

module.exports = Teste; 