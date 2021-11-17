import { forwardRef, Module } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { ProfessoresController } from './professores.controller';
import { professorProviders } from './professor.providers';
import { DatabaseModule } from 'src/database/database.module';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => PessoasModule),
    forwardRef(() => UsuariosModule)
  ],
  controllers: [ProfessoresController],
  providers: [
    ...professorProviders,
    ProfessoresService
  ]
})
export class ProfessoresModule { }
