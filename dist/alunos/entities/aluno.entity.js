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
var Aluno_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
const dado_entity_1 = require("../../dados/entities/dado.entity");
const treino_entity_1 = require("../../treinos/entities/treino.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
const typeorm_1 = require("typeorm");
const gereno_enum_1 = require("./Enum/gereno.enum");
let Aluno = Aluno_1 = class Aluno {
    constructor(aluno) {
        Object.assign(this, aluno);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Aluno.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Aluno.prototype, "peso", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Aluno.prototype, "altura", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Aluno.prototype, "idade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", }),
    __metadata("design:type", Number)
], Aluno.prototype, "imc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", }),
    __metadata("design:type", Number)
], Aluno.prototype, "tmb", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: gereno_enum_1.AlunoGenero, default: gereno_enum_1.AlunoGenero.M }),
    __metadata("design:type", Number)
], Aluno.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Aluno.prototype, "obs", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => dado_entity_1.Dados, aluno => Aluno_1, {
        eager: true,
        cascade: ['insert', 'remove', 'soft-remove', 'update']
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", dado_entity_1.Dados)
], Aluno.prototype, "dados", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => usuario_entity_1.Usuario, aluno => Aluno_1, {
        eager: true,
        cascade: ['insert', 'remove', 'soft-remove', 'update']
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", usuario_entity_1.Usuario)
], Aluno.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => treino_entity_1.Treino, {
        eager: true,
        cascade: ['insert', 'update']
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Aluno.prototype, "treinos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Aluno.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Aluno.prototype, "updated_at", void 0);
Aluno = Aluno_1 = __decorate([
    (0, typeorm_1.Entity)("alunos"),
    __metadata("design:paramtypes", [Object])
], Aluno);
exports.Aluno = Aluno;
//# sourceMappingURL=aluno.entity.js.map