import { forwardRef, Module } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { ProfessoresController } from './professores.controller';
import { professorProviders } from './professores.providers';
import { DatabaseModule } from 'src/database/database.module';
import { PessoasModule } from 'src/pessoas/pessoas.module';

@Module({
    imports: [
        DatabaseModule,
        forwardRef(() => PessoasModule)
    ],
    controllers: [ProfessoresController],
    providers: [
        ...professorProviders,
        ProfessoresService
    ]
})
export class ProfessoresModule { }