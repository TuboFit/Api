import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { LoginService } from './login.service';

interface IBodyDTO {
    email: string;
    password: string;
}

@Controller('usuarios/login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    @Post()
    async login(@Body() body: IBodyDTO) {
        const { email, password } = body
        try {
            const resultLogin = await this.loginService.execute(email, password);
            return resultLogin
        } catch (err) {
            throw new HttpException("Usuario não autenticado", HttpStatus.FORBIDDEN);
        }
    }
}
