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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./entities/usuario.entity");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async create(createUsuarioDto) {
        const usuario = new usuario_entity_1.Usuario(createUsuarioDto);
        try {
            usuario.password = (0, bcrypt_1.hashSync)(createUsuarioDto.password, 10);
            if (usuario)
                return await this.usuarioRepository.save(usuario);
        }
        catch (error) {
            throw new Error("Usuario não cadastrado");
        }
    }
    findAll() {
        try {
            return this.usuarioRepository.query("SELECT * FROM usuarios");
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            const usuario = await this.usuarioRepository.findOne(id);
            if (usuario)
                return usuario;
            throw new Error("Usuario não encontrado");
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findOneEmail(email) {
        try {
            const usuario = await this.usuarioRepository.findOne({ email: email });
            if (usuario && usuario.type === 'professor') {
                const dadosProfessor = await this.usuarioRepository.query(`SELECT * FROM professores WHERE "usuarioId"='${usuario.id}'`);
                return Object.assign(Object.assign({}, usuario), dadosProfessor[0]);
            }
            else if (usuario && usuario.type === 'aluno') {
                const dadosAlunos = await this.usuarioRepository.query(`SELECT * FROM alunos WHERE "usuarioId"='${usuario.id}'`);
                return Object.assign(Object.assign({}, usuario), dadosAlunos[0]);
            }
            else if (usuario && usuario.type === 'admin') {
                return usuario;
            }
            throw new Error("Usuario não encontrado");
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateUsuarioDto) {
        const newUser = new usuario_entity_1.Usuario(updateUsuarioDto);
        newUser.password = (0, bcrypt_1.hashSync)(updateUsuarioDto.password, 10);
        try {
            const getUsuario = await this.usuarioRepository.findOne(id);
            if (getUsuario) {
                this.usuarioRepository.merge(getUsuario, newUser);
                return await this.usuarioRepository.save(getUsuario);
            }
            throw new Error("Usuario não foi atualizado");
        }
        catch (error) {
            return new Error(error.message);
        }
    }
    async remove(id) {
        try {
            const getUsuario = await this.usuarioRepository.findOne(id);
            if (getUsuario)
                return await this.usuarioRepository.delete({ id: id }).then(() => "Usuario deletado").catch((e) => `Usuario não pode ser deletado${e}`);
            throw new Error("Usuario não encontrado");
        }
        catch (error) {
            return error;
        }
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USUARIO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map