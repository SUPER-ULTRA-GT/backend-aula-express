const UserModel = require('../models/UsersModel');

class UserController {

    read(req, res) {
        const data = UserModel.read();
        
    }
}