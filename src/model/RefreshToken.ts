import * as uuid from 'uuid'
import Account from './Account'

export default class RefreshToken {
    id: string
    refToken: string
    account_id: string
    account: Account
    
    constructor(props: Omit<RefreshToken, 'id' | 'account'>, id?: string, refToken?: string) {
        Object.assign(this, props);
        if(!id) this.id = uuid.v4();
    }
}