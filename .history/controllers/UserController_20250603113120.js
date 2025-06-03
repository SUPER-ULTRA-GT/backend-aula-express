const UserModel = require('../models/UsersModel');

class UserController {

    read(req, res) {
        const data = UserModel.read();
        return res.json(data);
    }
    getById(req, res) {
        const id = req.params.id;
        const data = 
    }
}