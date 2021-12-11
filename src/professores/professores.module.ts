import { forwardRef, Module } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { ProfessoresController } from './professores.controller';
import { DatabaseModule } from 'src/database/database.module';
import { professorProviders } from './professores.providers';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => UsuariosModule)
  ],
  controllers: [ProfessoresController],
  providers: [
    ...professorProviders,
    ProfessoresService
  ]
})
export class ProfessoresModule { }
