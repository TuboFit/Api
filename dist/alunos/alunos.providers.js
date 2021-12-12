"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunosProviders = void 0;
const aluno_entity_1 = require("./entities/aluno.entity");
exports.alunosProviders = [
    {
        provide: 'ALUNO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(aluno_entity_1.Aluno),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=alunos.providers.js.map