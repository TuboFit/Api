import { createConnection } from 'typeorm';


export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            name: 'turbo_fit_database',
            url: process.env.DATABASE_URL,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];
