
import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
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
