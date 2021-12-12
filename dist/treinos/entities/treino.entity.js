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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Treino = void 0;
const typeorm_1 = require("typeorm");
const create_treino_dto_1 = require("../dto/create-treino.dto");
const Nivel_1 = require("./Enum/Nivel");
const exercicios_entity_1 = require("./exercicios.entity");
let Treino = class Treino {
    constructor(treino) {
        Object.assign(this, treino);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Treino.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Treino.prototype, "grupMuscular", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Treino.prototype, "dia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: Nivel_1.Nivel, default: Nivel_1.Nivel.INICIANTE }),
    __metadata("design:type", String)
], Treino.prototype, "nivel", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => exercicios_entity_1.Exercicio, {
        eager: true, cascade: true
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Treino.prototype, "exercicios", void 0);
Treino = __decorate([
    (0, typeorm_1.Entity)("treinos"),
    __metadata("design:paramtypes", [create_treino_dto_1.CreateTreinoDto])
], Treino);
exports.Treino = Treino;
//# sourceMappingURL=treino.entity.js.map