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
exports.AlunosController = void 0;
const common_1 = require("@nestjs/common");
const alunos_service_1 = require("./alunos.service");
const create_aluno_dto_1 = require("./dto/create-aluno.dto");
const update_aluno_dto_1 = require("./dto/update-aluno.dto");
let AlunosController = class AlunosController {
    constructor(alunosService) {
        this.alunosService = alunosService;
    }
    async create(createAlunoDto) {
        try {
            return await this.alunosService.create(createAlunoDto);
        }
        catch (error) {
            return new common_1.HttpException("Erro ao cadastrar dados", common_1.HttpStatus.NOT_IMPLEMENTED);
        }
    }
    async findAll() {
        try {
            return await this.alunosService.findAll();
        }
        catch (error) {
            return new common_1.HttpException("Alunos não encontrados", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findOne(id) {
        try {
            return await this.alunosService.findOne(id);
        }
        catch (error) {
            throw new common_1.HttpException("Aluno não encontrado", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async update(id, updateAlunoDto) {
        try {
            return await this.alunosService.update(id, updateAlunoDto);
        }
        catch (error) {
            throw new common_1.HttpException("Aluno não atualizado", common_1.HttpStatus.NOT_ACCEPTABLE);
        }
    }
    async remove(id) {
        try {
            return await this.alunosService.remove(id);
        }
        catch (error) {
            throw new common_1.HttpException("Não foi possivel deletar o aluno", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_aluno_dto_1.CreateAlunoDto]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_aluno_dto_1.UpdateAlunoDto]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "remove", null);
AlunosController = __decorate([
    (0, common_1.Controller)('alunos'),
    __metadata("design:paramtypes", [alunos_service_1.AlunosService])
], AlunosController);
exports.AlunosController = AlunosController;
//# sourceMappingURL=alunos.controller.js.map