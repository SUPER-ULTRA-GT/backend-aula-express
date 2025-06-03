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
        return BolosModel.list
    }
    static getById()
    static create()
    static update()
    static delete()
}