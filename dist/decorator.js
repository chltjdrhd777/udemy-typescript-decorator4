"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function WithThis(template, hookId) {
    console.log("template factory");
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hooked = document.getElementById(hookId);
                if (hooked) {
                    hooked.innerHTML = template;
                    hooked.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let Exchange = class Exchange {
    constructor() {
        this.name = "Anderson";
        console.log("creating Exchange object");
    }
};
Exchange = __decorate([
    WithThis("<h1>put this thind in h1</h1>", "app")
], Exchange);
const test1 = new Exchange();
//# sourceMappingURL=decorator.js.map