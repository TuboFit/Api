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
exports.TreinosController = void 0;
const common_1 = require("@nestjs/common");
const treinos_service_1 = require("./treinos.service");
const create_treino_dto_1 = require("./dto/create-treino.dto");
const update_treino_dto_1 = require("./dto/update-treino.dto");
let TreinosController = class TreinosController {
    constructor(treinosService) {
        this.treinosService = treinosService;
    }
    create(createTreinoDto) {
        return this.treinosService.create(createTreinoDto);
    }
    findAll() {
        return this.treinosService.findAll();
    }
    async findOne(id) {
        try {
            return await this.treinosService.findOne(id);
        }
        catch (error) {
            return new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findForCref(cref) {
        try {
            return await this.treinosService.findAllForCref(cref);
        }
        catch (error) {
            return new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    update(id, updateTreinoDto) {
        return this.treinosService.update(id, updateTreinoDto);
    }
    remove(id) {
        return this.treinosService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_treino_dto_1.CreateTreinoDto]),
    __metadata("design:returntype", void 0)
], TreinosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreinosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TreinosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/treinosby/teacher'),
    __param(0, (0, common_1.Query)('cref')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TreinosController.prototype, "findForCref", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_treino_dto_1.UpdateTreinoDto]),
    __metadata("design:returntype", void 0)
], TreinosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TreinosController.prototype, "remove", null);
TreinosController = __decorate([
    (0, common_1.Controller)('treinos'),
    __metadata("design:paramtypes", [treinos_service_1.TreinosService])
], TreinosController);
exports.TreinosController = TreinosController;
//# sourceMappingURL=treinos.controller.js.map