"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: 'postgres',
    name: 'turbo_fit_database',
    url: process.env.DATABASE_URL,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: [
        __dirname, '../database/migrations/*'
    ],
    cli: { migrationsDir: 'src/database/migrations' },
    synchronize: true,
};
//# sourceMappingURL=database.config.js.map