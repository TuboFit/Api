import { createConnection } from 'typeorm';


export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            name: 'tubofit_database',
            url: 'postgres://postgres:admin@postgres-10-alpine:5432/turbo_fit_database',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];
