const express = require('express');
const router = express.Router();
const Teste = require('../models/teste');

// Criar novo registro
router.post('/', async (req, res) => {
    try {
        const novoTeste = await Teste.create(req.body);
        res.status(201).json(novoTeste);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Buscar todos os registros
router.get('/', async (req, res) => {
    try {
        const testes = await Teste.findAll();
        res.json(testes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Buscar um registro por ID
router.get('/:id', async (req, res) => {
    try {
        const teste = await Teste.findByPk(req.params.id);
        if (!teste) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }
        res.json(teste);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Atualizar um registro
router.put('/:id', async (req, res) => {
    try {
        const testeAtualizado = await Teste.update(req.body, req.params.id);
        if (!testeAtualizado) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }
        res.json(testeAtualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Deletar um registro
router.delete('/:id', async (req, res) => {
    try {
        await Teste.destroy(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router; 