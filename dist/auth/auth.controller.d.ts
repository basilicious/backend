import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(_body: any): Promise<string>;
    loginUser(req: any): Promise<{
        access_token: string;
    }>;
    userProfile(req: any): Promise<any>;
}
