"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await (0, typeorm_1.createConnection)({
            type: 'postgres',
            name: 'turbo_fit_database',
            url: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            migrations: [
                __dirname, '../database/migrations/*'
            ],
            cli: { migrationsDir: 'src/database/migrations' },
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map