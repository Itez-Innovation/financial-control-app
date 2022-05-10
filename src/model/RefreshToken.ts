import * as uuid from 'uuid'

export default class RefreshToken {
    id: string
    expiresIn: number
    account_id: string
    
    constructor(props: Omit<RefreshToken, 'id' | 'accountId'>, id?: string, account_id?: string) {
        Object.assign(this, props);

        if(!id) this.id = uuid.v4();
    }
}