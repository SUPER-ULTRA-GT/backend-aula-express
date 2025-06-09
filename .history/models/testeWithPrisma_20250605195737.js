const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Funções similares ao Sequelize
const Teste = {
    // Create
    async create(dados) {
        return await prisma.teste.create({
            data: dados
        });
    },

    // FindAll
    async findAll() {
        return await prisma.teste.findMany();
    },

    // FindByPk
    async findByPk(id) {
        return await prisma.teste.findUnique({
            where: { id: parseInt(id) }
        });
    },

    // Update
    async update(dados, id) {
        return await prisma.teste.update({
            where: { id: parseInt(id) },
            data: dados
        });
    },

    // Delete
    async destroy(id) {
        await prisma.teste.delete({
            where: { id: parseInt(id) }
        });
        return true;
    }
};

module.exports = Teste; 