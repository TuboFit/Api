import { Inject, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import * as  bcrypt from 'bcrypt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { AlunosService } from 'src/alunos/alunos.service';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
    constructor(
        private readonly usuariosService: UsuariosService,
    ) { }
    async execute(email: string, password: string) {
        const user = await this.usuariosService.findOneEmail(email)
        console.log(user)
        if (!user) throw new Error("Usuario não exite");

        const authorization = await bcrypt.compare(password, user.password)

        if (!authorization) throw new Error("Erro de autenticação");

        const useReturns = {
            id: user.id,
            email: user.email,
            ...user
        }

        const token = sign({
            usuario: {
                id: user.id,
                email: user.email,

            }
        },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: "1d"
            }
        )

        return { token, useReturns }

    }
}
