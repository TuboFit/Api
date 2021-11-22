import { createConnection } from 'typeorm';


export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            name: 'turbofit_database',
            url: 'postgres://postgres:admin@turbo_fit_database:5432/turbo_fit_database',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];
