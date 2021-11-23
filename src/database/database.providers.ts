import { createConnection } from 'typeorm';


export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            name: 'turbofit_database',
            ssl: { rejectUnauthorized: false },
            url: process.env.DATABASE_URL,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];
