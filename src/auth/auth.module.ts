import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { usuarioProviders } from 'src/usuarios/usuarios.providers';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => UsuariosModule),
  ],
  controllers: [LoginController],
  providers: [
    ...usuarioProviders,
    LoginService,
    UsuariosService,
  ]
})
export class AuthModule { }
