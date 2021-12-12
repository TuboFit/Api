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
var Endereco_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
const typeorm_1 = require("typeorm");
const create_endereco_dto_1 = require("../dto/create-endereco.dto");
const dado_entity_1 = require("./dado.entity");
let Endereco = Endereco_1 = class Endereco {
    constructor(endereco) {
        Object.assign(this, endereco);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Endereco.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => dado_entity_1.Dados, endereco => Endereco_1),
    __metadata("design:type", dado_entity_1.Dados)
], Endereco.prototype, "dados", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Endereco.prototype, "logradouro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Endereco.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Endereco.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Endereco.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Endereco.prototype, "uf", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Endereco.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Endereco.prototype, "updated_at", void 0);
Endereco = Endereco_1 = __decorate([
    (0, typeorm_1.Entity)("enderecos"),
    __metadata("design:paramtypes", [create_endereco_dto_1.CreateEnderecoDto])
], Endereco);
exports.Endereco = Endereco;
//# sourceMappingURL=endereco.entity.js.map