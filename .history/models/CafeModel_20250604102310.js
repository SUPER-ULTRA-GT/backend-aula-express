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
    static getById()
    static create()
    static update(0)
    static delete()
}