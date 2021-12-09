import { Inject, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import * as  bcrypt from 'bcrypt';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class LoginService {
    constructor(private readonly usuariosService: UsuariosService) { }
    async execute(email: string, password: string) {
        const user = await this.usuariosService.findOneEmail(email)
        const authorization = await bcrypt.compare(password, user.password)
        if (authorization) {
            const useReturns = {
                id: user.id,
                email: user.email
            }

            const token = sign({
                usuario: {
                    id: user.id,
                    email: user.email
                }
            },
                process.env.JWT_SECRET,
                {
                    subject: user.id,
                    expiresIn: "1d"
                }
            )
            console.log({ token, useReturns })
            return { token, useReturns }
        }
    }
}
