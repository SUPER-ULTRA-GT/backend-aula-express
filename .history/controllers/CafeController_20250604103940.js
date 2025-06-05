const { json } = require("express");
const CafeModel = require("../models/CafeModel");

class CafeController {

    read(req, res) {
        const data = CafeModel.read();
        return res.json(data);
    }
    // http://localhost:3000/cafe/:id
    getById(req, res) {
        const id = req.params.id;
        const data = CafeModel.getById(id);
        return res.status(201).json({
            message: 'Cafe'
        })
    }
    create(req, res)
    update(req, res)
    delete(req, res)
}