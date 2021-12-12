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
exports.DadoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dado_entity_1 = require("./entities/dado.entity");
let DadoService = class DadoService {
    constructor(dadosRepository, enderecoRepository) {
        this.dadosRepository = dadosRepository;
        this.enderecoRepository = enderecoRepository;
    }
    async create(createDadoDto) {
        const dados_pessoais = new dado_entity_1.Dados(createDadoDto);
        try {
            const dados_cadastrados = this.dadosRepository.save(dados_pessoais);
            if (dados_cadastrados)
                return dados_cadastrados;
            return new Error("Dados não cadastrados");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async findAll() {
        try {
            const dados = await this.dadosRepository.find();
            if (dados.length > 0)
                return dados;
            throw new Error("Dados não encontrados");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async findOne(id) {
        try {
            const usuario = await this.dadosRepository.findOne(id);
            if (usuario)
                return usuario;
            throw new Error("Usuario não encontrado");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async update(id, updateDadoDto) {
        const newDados = new dado_entity_1.Dados(updateDadoDto);
        try {
            const getDado = await this.dadosRepository.findOne(id);
            if (getDado) {
                this.dadosRepository.merge(getDado, newDados);
                return await this.dadosRepository.save(getDado);
            }
            throw new Error("Não foi possivel atualizar usuario");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async remove(id) {
        const dados = this.dadosRepository.findOne(id);
        try {
            if (dados)
                return await this.dadosRepository.delete(id);
            throw new Error("Não foi possivel deletar dados");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
DadoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DADOS_REPOSITORY')),
    __param(1, (0, common_1.Inject)('ENDERECO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], DadoService);
exports.DadoService = DadoService;
//# sourceMappingURL=dados.service.js.map