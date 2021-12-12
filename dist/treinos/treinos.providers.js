"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treinoProviders = void 0;
const treino_entity_1 = require("./entities/treino.entity");
exports.treinoProviders = [
    {
        provide: 'TREINO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(treino_entity_1.Treino),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=treinos.providers.js.map