"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
// import { financialStats } from '../service/financialStatsService'
// npm install prompt-sync
// const prompt = require("prompt-sync")()
// let inpt = new Input()
// let otpt = new Output()
// let fStat = new financialStats()
class Account {
    constructor(props, id, input, output) {
        Object.assign(this, props);
        if (!id)
            this.id = uuid.v4();
    }
}
exports.default = Account;
//# sourceMappingURL=Account.js.map