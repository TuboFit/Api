import { forwardRef, Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usuarioProviders } from './usuarios.providers';
import { ProfessoresModule } from 'src/professores/professores.module';
import { AlunosModule } from 'src/alunos/alunos.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => ProfessoresModule),
    forwardRef(() => AlunosModule),
  ],
  controllers: [UsuariosController],
  providers: [
    ...usuarioProviders,
    UsuariosService
  ]
})
export class UsuariosModule { }
