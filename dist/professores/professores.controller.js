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
exports.ProfessoresController = void 0;
const common_1 = require("@nestjs/common");
const professores_service_1 = require("./professores.service");
const create_professore_dto_1 = require("./dto/create-professore.dto");
const update_professore_dto_1 = require("./dto/update-professore.dto");
let ProfessoresController = class ProfessoresController {
    constructor(professoresService) {
        this.professoresService = professoresService;
    }
    async create(createProfessoreDto) {
        try {
            return await this.professoresService.create(createProfessoreDto);
        }
        catch (error) {
            throw new common_1.HttpException("Professores não cadastrado", common_1.HttpStatus.NOT_IMPLEMENTED);
        }
    }
    async findAll() {
        try {
            return await this.professoresService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException("Professores não encontrados", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findOne(id) {
        try {
            return await this.professoresService.findOne(id);
        }
        catch (error) {
            throw new common_1.HttpException("Professor não encontrado", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async update(id, updateProfessorDto) {
        try {
            return await this.professoresService.update(id, updateProfessorDto);
        }
        catch (error) {
            throw new common_1.HttpException("Não foi possivel alterar o professor", common_1.HttpStatus.NOT_IMPLEMENTED);
        }
    }
    async remove(id) {
        try {
            return await this.professoresService.remove(id);
        }
        catch (error) {
            throw new common_1.HttpException("Não foi possivel deletar o professor", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_professore_dto_1.CreateProfessorDto]),
    __metadata("design:returntype", Promise)
], ProfessoresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfessoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfessoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_professore_dto_1.UpdateProfessorDto]),
    __metadata("design:returntype", Promise)
], ProfessoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfessoresController.prototype, "remove", null);
ProfessoresController = __decorate([
    (0, common_1.Controller)('professores'),
    __metadata("design:paramtypes", [professores_service_1.ProfessoresService])
], ProfessoresController);
exports.ProfessoresController = ProfessoresController;
//# sourceMappingURL=professores.controller.js.map