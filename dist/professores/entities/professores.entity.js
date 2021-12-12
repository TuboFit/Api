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
var Professor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const dado_entity_1 = require("../../dados/entities/dado.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Professor = Professor_1 = class Professor {
    constructor(professor) {
        Object.assign(this, professor);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Professor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Professor.prototype, "cref", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => dado_entity_1.Dados, professor => Professor_1, {
        eager: true,
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", dado_entity_1.Dados)
], Professor.prototype, "dados", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => usuario_entity_1.Usuario, professor => Professor_1, {
        eager: true,
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", usuario_entity_1.Usuario)
], Professor.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Professor.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Professor.prototype, "updated_at", void 0);
Professor = Professor_1 = __decorate([
    (0, typeorm_1.Entity)("professores"),
    __metadata("design:paramtypes", [Object])
], Professor);
exports.Professor = Professor;
//# sourceMappingURL=professores.entity.js.map