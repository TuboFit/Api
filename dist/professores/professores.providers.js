"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.professorProviders = void 0;
const professores_entity_1 = require("./entities/professores.entity");
exports.professorProviders = [
    {
        provide: 'PROFESSOR_REPOSITORY',
        useFactory: (connection) => connection.getRepository(professores_entity_1.Professor),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=professores.providers.js.map