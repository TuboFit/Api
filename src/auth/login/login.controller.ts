import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('usuarios/login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    @Post()
    login(@Body() body) {
        const { email, password } = body
        try {
            const resultLogin = this.loginService.execute(email, password);
            return resultLogin
        } catch (err) {
            return new Error(err.message)
        }
    }
}
