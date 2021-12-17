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
exports.ProfessoresService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const typeorm_1 = require("typeorm");
const professores_entity_1 = require("./entities/professores.entity");
let ProfessoresService = class ProfessoresService {
    constructor(professorRepository) {
        this.professorRepository = professorRepository;
    }
    create(createProfessorDto) {
        const professor = new professores_entity_1.Professor(createProfessorDto);
        professor.usuario.password = (0, bcrypt_1.hashSync)(createProfessorDto.usuario.password, 10);
        return this.professorRepository.save(professor);
    }
    findAll() {
        try {
            return this.professorRepository.find();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async findOne(id) {
        try {
            const professor = await this.professorRepository.findOne(id);
            if (professor)
                return professor;
            throw new Error("Professor não encontrado");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async update(id, updateProfessoreDto) {
        try {
            const updateProfessor = new professores_entity_1.Professor(updateProfessoreDto);
            const getProfessor = await this.professorRepository.findOne(id);
            updateProfessor.usuario.password = (0, bcrypt_1.hashSync)(updateProfessoreDto.usuario.password, 10);
            if (getProfessor) {
                await this.professorRepository
                    .query(`
          UPDATE 
            usuarios
          SET
           "email"='${updateProfessor.usuario.email}',
           "password"='${updateProfessor.usuario.password}'
          WHERE "id"='${getProfessor.usuario.id}'
          `);
                this.professorRepository.merge(getProfessor, updateProfessor);
                return await this.professorRepository.save(getProfessor);
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async remove(id) {
        const professor = await this.professorRepository.findOne(id);
        try {
            if (professor) {
                await this.professorRepository
                    .delete(id)
                    .then(() => "Professor deletado do banco de dados")
                    .catch(e => e);
                await this.professorRepository
                    .query(`DELETE FROM dados WHERE "id"='${professor.dados.id}'`)
                    .then(() => "Dados do professor deletados")
                    .catch(e => e);
                await this.professorRepository
                    .query(`DELETE FROM usuarios WHERE "id"='${professor.usuario.id}'`)
                    .then(() => "Usuario do professor foi deletado")
                    .catch(e => e);
            }
        }
        catch (error) {
            throw new Error("Erro ao deletar professor");
        }
    }
};
ProfessoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PROFESSOR_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProfessoresService);
exports.ProfessoresService = ProfessoresService;
//# sourceMappingURL=professores.service.js.map