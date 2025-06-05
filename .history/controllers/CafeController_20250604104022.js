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
        return res.json(data);
    }
    create(req, res) {
        const body = req.body;
        CafeModel.create(body)
    }
    update(req, res)
    delete(req, res)
}