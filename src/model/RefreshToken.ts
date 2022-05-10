import * as uuid from 'uuid'

export default class RefreshToken {
    id: string
    expiresIn: number
    accountId: string
    
    constructor(props: Omit<RefreshToken, 'id' | 'accountId'>, id?: string, accountId?: string) {
        Object.assign(this, props);

        if(!id) this.id = uuid.v4();
    }
}