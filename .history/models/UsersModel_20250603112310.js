class UsersModel {
    static list = [
        {
            id: 1,
            login: 'admin',
            senha: 'admin123'
        },
        {
            id: 2,
            login: 'admin2',
            senha: 'admin321'
        }
    ];

    static read() {
        return UsersModel.list;
    }
    static getById(id) {
        
    }
}