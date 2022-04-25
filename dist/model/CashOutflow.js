"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setores = void 0;
// npm install prompt-sync
const prompt = require("prompt-sync")();
var setores;
(function (setores) {
    setores["groceries"] = "Alimenta\u00E7\u00E3o";
    setores["education"] = "Educa\u00E7\u00E3o";
    setores["entertainment"] = "Entretenimento";
    setores["health"] = "Sa\u00FAde";
    setores["transport"] = "Transporte";
})(setores = exports.setores || (exports.setores = {}));
class Output {
    constructor(id, area, titulo, valor) {
        if (id && area && titulo && valor) {
            this.id = id;
            this.Area = area;
            this.Titulo = titulo;
            this.Valor = valor;
        }
        else {
            this.Area = setores.groceries;
            this.Titulo = "";
            this.Valor = 0.0;
        }
    }
}
exports.default = Output;
//# sourceMappingURL=CashOutflow.js.map