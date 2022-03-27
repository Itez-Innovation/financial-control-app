import { Gasto } from './Gasto'

export class Entretenimento extends Gasto {

    constructor(id?: number, area?: string, titulo?: string, valor?: number){
        if (id && area && titulo && valor) {
            super(id, area, titulo, valor)
        } else {
            super()
        }
    }

    get getId() {
        return this.id
    }

    set setId(id: number) {
        this.id = id
    }

    get getArea() {
        return this.area
    }

    set setArea(area: string) {
        this.area = area
    }

    get getTitulo() {
        return this.titulo
    }

    set setTitulo(titulo: string) {
        this.titulo = titulo
    }

    get getValor() {
        return this.valor
    }

    set setValor(valor: number) {
        this.valor = valor
    }
}