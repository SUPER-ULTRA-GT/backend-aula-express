const BolosModel = require('../models/BolosModel');

class BolosController {

    read(req, res) {
        const data = BolosModel.read();
        return res.json(data);
    }
    getById()
    create()
    update()
    delete()
}