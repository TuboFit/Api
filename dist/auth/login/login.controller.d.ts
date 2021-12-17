import { LoginService } from './login.service';
interface IBodyDTO {
    email: string;
    password: string;
}
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(body: IBodyDTO): Promise<{
        token: string;
        useReturns: any;
    }>;
}
export {};
