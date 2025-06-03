// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
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
        const data = UsersModel.list.filter(item => item.id === Number(id));
        return data;
    }
    static create(data) {
        UsersModel.list.push(data);
    }
    static update(id, data) {
        const index = UsersModel.list.findIndex(item => item.id === Number(id));
        UsersModel.list[index] = data;
    }
    static delete(id) {
        const data = UsersModel.list.findIndex(item => item.id === Number(id))
        UsersModel.list = 
    }
}

module.exports = UsersModel;