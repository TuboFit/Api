"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dadosProviders = void 0;
const dado_entity_1 = require("./entities/dado.entity");
const endereco_entity_1 = require("./entities/endereco.entity");
exports.dadosProviders = [
    {
        provide: 'DADOS_REPOSITORY',
        useFactory: (connection) => connection.getRepository(dado_entity_1.Dados),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'ENDERECO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(endereco_entity_1.Endereco),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=dados.providers.js.map