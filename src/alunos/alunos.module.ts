import { forwardRef, Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from './alunos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { alunosProviders } from './alunos.providers';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => UsuariosModule)
  ],
  controllers: [AlunosController],
  providers: [
    ...alunosProviders,
    AlunosService
  ]
})
export class AlunosModule { }
