"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const usuarios_module_1 = require("../usuarios/usuarios.module");
const usuarios_providers_1 = require("../usuarios/usuarios.providers");
const usuarios_service_1 = require("../usuarios/usuarios.service");
const login_controller_1 = require("./login/login.controller");
const login_service_1 = require("./login/login.service");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            (0, common_1.forwardRef)(() => usuarios_module_1.UsuariosModule),
        ],
        controllers: [login_controller_1.LoginController],
        providers: [
            ...usuarios_providers_1.usuarioProviders,
            login_service_1.LoginService,
            usuarios_service_1.UsuariosService,
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map