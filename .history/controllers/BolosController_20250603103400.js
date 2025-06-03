const BolosModel = require('../models/BolosModel');

class BolosController {

    read(req, res) {
        const data = BolosModel.read();
        return res.json(data);
    }
    getById(req, res) {
        const id = req.params.id;
        const data = BolosModel.getById(id);
        return res.json(data);
    }
    create(req, res) {
        const body = req.body;
        BolosModel.create(body);
        
    }
    update()
    delete()
}

// http://bolosGT.com/{1} => parametro