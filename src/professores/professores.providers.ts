import { Connection } from 'typeorm';
import { Professor } from './entities/professores.entity';

export const professorProviders = [
    {
        provide: 'PROFESSOR_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Professor),
        inject: ['DATABASE_CONNECTION'],
    }
];