import * as uuid from 'uuid'

export default class RefreshToken {
    id: string
    refToken: string
    account_id: string
    
    constructor(props: Omit<RefreshToken, 'id'>, id?: string, account_id?: string) {
        Object.assign(this, props);

        if(!id) this.id = uuid.v4();
    }
}