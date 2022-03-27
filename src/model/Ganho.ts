export class Ganho {
    private _id: number
    private _titulo: string
    private _valor: number
    
    constructor(id?: number, titulo?: string, valor?: number) {
        if (id && titulo && valor) {
            this._id = id
            this._titulo = titulo
            this._valor = valor
        } else {
            this._id = 0
            this._titulo = ""
            this._valor = 0.0
        }
    }

    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
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