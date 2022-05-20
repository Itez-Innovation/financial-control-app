import * as uuid from 'uuid'
import Permission from './Permission'

export default class Role {
    id: string
    name: string
    description: string
    permissions: Permission[]
    createdAt: Date
    updatedAt: Date

    constructor(props: Omit<Role, 'id' | 'createdAt' | 'updatedAt' | 'permissions'>, id?: string, permissions?: Permission){
        Object.assign(this, props)
        if(!id) this.id = uuid.v4()

    }
}