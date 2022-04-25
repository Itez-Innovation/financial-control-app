"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// npm install prompt-sync
const prompt = require("prompt-sync")();
class Input {
    constructor(id, titulo, valor) {
        if (id && titulo && valor) {
            this.id = id;
            this.Titulo = titulo;
            this.Valor = valor;
        }
        else {
            this.Titulo = "";
            this.Valor = 0.0;
        }
    }
}
exports.default = Input;
//# sourceMappingURL=CashInflow.js.map