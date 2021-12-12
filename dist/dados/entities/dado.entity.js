"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Dados_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dados = void 0;
const typeorm_1 = require("typeorm");
const endereco_entity_1 = require("./endereco.entity");
let Dados = Dados_1 = class Dados {
    constructor(dados) {
        Object.assign(this, dados);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Dados.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: "90", nullable: false }),
    __metadata("design:type", String)
], Dados.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Dados.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 12 }),
    __metadata("design:type", String)
], Dados.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true, length: 15 }),
    __metadata("design:type", String)
], Dados.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => endereco_entity_1.Endereco, dados => Dados_1, {
        eager: true,
        cascade: true
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", endereco_entity_1.Endereco)
], Dados.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Dados.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Dados.prototype, "updated_at", void 0);
Dados = Dados_1 = __decorate([
    (0, typeorm_1.Entity)("dados"),
    __metadata("design:paramtypes", [Object])
], Dados);
exports.Dados = Dados;
//# sourceMappingURL=dado.entity.js.map