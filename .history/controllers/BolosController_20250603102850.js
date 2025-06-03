const BolosModel = require('../models/BolosModel');

class BolosController {

    read(req, res) {
        const data = BolosModel.read();
        return res.json(data);
    }
    getById(req, res) {
        const id = req.params.id;
    }
    create()
    update()
    delete()
}

// http:// 