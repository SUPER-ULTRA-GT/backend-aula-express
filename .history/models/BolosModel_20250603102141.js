// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class BolosModel {
    static list = [
        {
            id: 1,
            sabor: 'Laranja',
            preco: 12
        },
        {
            id: 2,
            sabor: 'Limao',
            preco: 20
        }
    ]
    static read() {
        return BolosModel.list;
    }
    static getById(id) {
        const register = BolosModel.list.filter(item => item.id === Number(id));
        return register;
    }
    static create(data) {
        BolosModel.list.push(data);
    }
    static update(id, data) {
        const index = BolosModel.list.findIndex(item => item.id === Number(id));
    }
    static delete(id)
}
