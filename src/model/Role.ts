import * as uuid from 'uuid'

export default class Role {
    id: string
    name: string
    description: string
    permission_id: string
    createdAt: Date
    updatedAt: Date

    constructor(props: Omit<Role, 'id' | 'createdAt' | 'updatedAt' | 'permission_id'>, id?: string){

        Object.assign(this, props)

        if(!id) this.id = uuid.v4()

    }
}