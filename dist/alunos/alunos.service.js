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
exports.AlunosService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const Alunos_1 = require("../utils/Alunos");
const typeorm_1 = require("typeorm");
const aluno_entity_1 = require("./entities/aluno.entity");
let AlunosService = class AlunosService {
    constructor(alunoRepository) {
        this.alunoRepository = alunoRepository;
    }
    async create(createAlunoDto) {
        const newAluno = new aluno_entity_1.Aluno(createAlunoDto);
        newAluno.usuario.password = (0, bcrypt_1.hashSync)(createAlunoDto.usuario.password, 10);
        newAluno.imc = (0, Alunos_1.setIMC)(createAlunoDto.altura, createAlunoDto.peso);
        newAluno.tmb = (0, Alunos_1.setTMB)(createAlunoDto.altura, createAlunoDto.peso, createAlunoDto.idade, createAlunoDto.genero);
        try {
            const aluno = await this.alunoRepository.save(newAluno);
            if (aluno)
                return aluno;
            throw new Error("Aluno não cadastrado");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async findAll() {
        const alunos = await this.alunoRepository.find();
        try {
            if (alunos)
                return alunos;
            return new Error("Alunos não encontrados");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async findOne(id) {
        const aluno = await this.alunoRepository.findOne(id);
        try {
            if (aluno)
                return aluno;
            return new Error("Aluno não encontrado");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async findOneUser(email) {
        const aluno = await this.alunoRepository.findOne({
            where: {
                usuario: {
                    email: email
                }
            },
            relations: ['dados', 'usuarios']
        });
        try {
            if (aluno)
                return aluno;
            return new Error("Aluno não encontrado");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async update(id, updateAlunoDto) {
        const updateAluno = new aluno_entity_1.Aluno(updateAlunoDto);
        updateAluno.usuario.password = (0, bcrypt_1.hashSync)(updateAlunoDto.usuario.password, 10);
        updateAluno.imc = (0, Alunos_1.setIMC)(updateAlunoDto.altura, updateAlunoDto.peso);
        updateAluno.tmb = (0, Alunos_1.setTMB)(updateAlunoDto.altura, updateAlunoDto.peso, updateAlunoDto.idade, updateAlunoDto.genero);
        const getAluno = await this.alunoRepository.findOne(id);
        try {
            if (getAluno) {
                await this.alunoRepository
                    .query(`
        UPDATE 
          usuarios
        SET
         "email"='${updateAluno.usuario.email}',
         "password"='${updateAluno.usuario.password}'
        WHERE "id"='${getAluno.usuario.id}'
        `);
                this.alunoRepository.merge(getAluno, updateAluno);
                return await this.alunoRepository.save(getAluno);
            }
            return new Error("Aluno não encontrado");
        }
        catch (error) {
            throw new Error("Não foi possivel atualizar o aluno");
        }
    }
    async remove(id) {
        const aluno = await this.alunoRepository.findOne(id);
        try {
            if (aluno) {
                await this.alunoRepository.delete(id);
                await this.alunoRepository.query(`DELETE FROM dados WHERE "id"='${aluno.dados.id}'`);
                await this.alunoRepository.query(`DELETE FROM usuarios WHERE "id"='${aluno.usuario.id}'`);
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
AlunosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("ALUNO_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AlunosService);
exports.AlunosService = AlunosService;
//# sourceMappingURL=alunos.service.js.map