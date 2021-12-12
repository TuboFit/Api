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
exports.DadoController = void 0;
const common_1 = require("@nestjs/common");
const dados_service_1 = require("./dados.service");
const create_dado_dto_1 = require("./dto/create-dado.dto");
const update_dado_dto_1 = require("./dto/update-dado.dto");
let DadoController = class DadoController {
    constructor(dadoService) {
        this.dadoService = dadoService;
    }
    async create(createDadoDto) {
        try {
            return await this.dadoService.create(createDadoDto);
        }
        catch (error) {
            throw new common_1.HttpException("Erro ao cadastrar dados", common_1.HttpStatus.NOT_IMPLEMENTED);
        }
    }
    async findAll() {
        try {
            return await this.dadoService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException("Dados não encontrados", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findOne(id) {
        try {
            return await this.dadoService.findOne(id);
        }
        catch (error) {
            throw new common_1.HttpException("Dados não encontrados", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async update(id, updateDadoDto) {
        try {
            return await this.dadoService.update(id, updateDadoDto);
        }
        catch (error) {
            throw new common_1.HttpException("Não foi possivel atualizar dados", common_1.HttpStatus.NOT_MODIFIED);
        }
    }
    async remove(id) {
        try {
            return await this.dadoService.remove(id);
        }
        catch (error) {
            throw new common_1.HttpException("Não foi possivel deletar dados", common_1.HttpStatus.NOT_MODIFIED);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dado_dto_1.CreateDadosDto]),
    __metadata("design:returntype", Promise)
], DadoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DadoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dado_dto_1.UpdateDadosDto]),
    __metadata("design:returntype", Promise)
], DadoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DadoController.prototype, "remove", null);
DadoController = __decorate([
    (0, common_1.Controller)('dados'),
    __metadata("design:paramtypes", [dados_service_1.DadoService])
], DadoController);
exports.DadoController = DadoController;
//# sourceMappingURL=dados.controller.js.map