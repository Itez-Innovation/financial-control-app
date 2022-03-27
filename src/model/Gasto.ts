abstract class Gasto {
    public id: number
    area: string
    titulo: string
    valor: number

    constructor(id: number, area: string, titulo: string, valor: number){
        this.id = id
        this.area = area
        this.titulo = titulo
        this.valor = valor
    }
}