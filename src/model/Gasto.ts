export abstract class Gasto {
    private _id: number
    
    private _area: string
    
    private _titulo: string
    
    private _valor: number
    

    constructor(id: number, area: string, titulo: string, valor: number){
        this._id = id
        this._area = area
        this._titulo = titulo
        this._valor = valor
    }

    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get area(): string {
        return this._area
    }
    public set area(value: string) {
        this._area = value
    }

    public get titulo(): string {
        return this._titulo
    }
    public set titulo(value: string) {
        this._titulo = value
    }

    public get valor(): number {
        return this._valor
    }
    public set valor(value: number) {
        this._valor = value
    }
}