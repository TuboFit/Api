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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreinosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const treino_entity_1 = require("./entities/treino.entity");
let TreinosService = class TreinosService {
    constructor(treinoRepository) {
        this.treinoRepository = treinoRepository;
    }
    create(createTreinoDto) {
        const treino = new treino_entity_1.Treino(createTreinoDto);
        return this.treinoRepository.save(treino);
    }
    async findAll() {
        try {
            return await this.treinoRepository.find();
        }
        catch (error) {
            return new Error(error.message);
        }
    }
    async findAllForCref(cref) {
        try {
            return await this.treinoRepository.find({ where: { crefProfessor: cref } });
        }
        catch (error) {
            return new Error(error.message);
        }
    }
    async findOne(id) {
        try {
            const treino = await this.treinoRepository.findOne(id);
            const idDados = await this.treinoRepository.query(`SELECT "dadosId" FROM professores WHERE "cref"='${treino.crefProfessor}' LIMIT 1`);
            const professor = await this.treinoRepository.query(`SELECT nome FROM dados WHERE id='${idDados[0].dadosId}' LIMIT 1`);
            if (professor && treino) {
                return Object.assign({ nomeProfessor: professor[0].nome }, treino);
            }
            throw new Error("Dados não carregados");
        }
        catch (error) {
            return new Error(error);
        }
    }
    async update(id, updateTreinoDto) {
        try {
            const updateTreino = new treino_entity_1.Treino(updateTreinoDto);
            const treino = await this.treinoRepository.findOne(id);
            if (treino) {
                this.treinoRepository.merge(treino, updateTreino);
                await this.treinoRepository.save(treino);
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async remove(id) {
        try {
            const treino = await this.treinoRepository.findOne(id);
            if (treino)
                return await this.treinoRepository.delete(id);
            return new Error("treino não encontrado");
        }
        catch (error) {
            return new Error(error.message);
        }
    }
};
TreinosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TREINO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TreinosService);
exports.TreinosService = TreinosService;
//# sourceMappingURL=treinos.service.js.map