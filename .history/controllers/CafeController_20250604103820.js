const CafeModel = require("../models/CafeModel");

class CafeController {

    read(req, res) {
        const data = CafeModel.read();
        return res.json(data);
    }
    getById(req, res) {
        const id = req.params.id
    }
    create(req, res)
    update(req, res)
    delete(req, res)
}