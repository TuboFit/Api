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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const usuarios_service_1 = require("../../usuarios/usuarios.service");
const alunos_service_1 = require("../../alunos/alunos.service");
const aluno_entity_1 = require("../../alunos/entities/aluno.entity");
let LoginService = class LoginService {
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    async execute(email, password) {
        const user = await this.usuariosService.findOneEmail(email);
        console.log(user);
        if (!user)
            throw new Error("Usuario não exite");
        const authorization = await bcrypt.compare(password, user.password);
        if (!authorization)
            throw new Error("Erro de autenticação");
        const useReturns = Object.assign({ id: user.id, email: user.email }, user);
        const token = (0, jsonwebtoken_1.sign)({
            usuario: {
                id: user.id,
                email: user.email,
            }
        }, process.env.JWT_SECRET, {
            subject: user.id,
            expiresIn: "1d"
        });
        return { token, useReturns };
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map