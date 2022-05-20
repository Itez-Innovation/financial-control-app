import * as uuid from 'uuid'

export default class Permission {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date

    constructor(props: Omit<Permission, 'id' | 'createdAt' | 'updatedAt'>, id?: string){

        Object.assign(this, props)

        if(!id) this.id = uuid.v4()

    }

}