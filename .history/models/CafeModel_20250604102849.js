// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class CafeModel {
    static list = [
        {
            id: 1,
            nome: 'preto',
            tamanho: [
                'P',
                'M',
                'G'
            ]
        },
        {
            id: 2,
            nome: 'chafe',
            tamanho: [
                'P',
                'M',
                'G'
            ]
        }
    ]

    static read() {
        return CafeModel.list;
    }
    static getById(id) {
        const register = CafeModel.list.filter(item => item.id === Number(id));
        return register;
    }
    static create(data) {
        CafeModel.list.push(data);
    }
    static update(id, data) {
        const index = CafeModel.list.indexOf(item => item.id === Number(id));
        CafeModel.list[index] = data;
    }
    static delete(id) {
        const index = CafeModel.list.indexOf(item => item.id === Number(id));
        CafeModel.list
    }
}