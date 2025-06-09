const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testConnection() {
    try {
        // Tenta executar uma query simples
        const result = await prisma.$queryRaw`SELECT 1`;
        console.log('✅ Conexão com Supabase estabelecida com sucesso!');
        console.log('Resultado da query:', result);

        // Lista todas as tabelas do banco
        const tables = await prisma.$queryRaw`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        `;
        console.log('\nTabelas encontradas no banco:');
        for (const table of tables) {
            console.log(`- ${table.table_name}`);
        }

    } catch (error) {
        console.error('❌ Erro ao conectar com Supabase:', error);
    } finally {
        await prisma.$disconnect();
    }
}

testConnection(); 