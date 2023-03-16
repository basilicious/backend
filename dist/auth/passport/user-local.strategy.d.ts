import { AuthService } from '../auth.service';
declare const UserLocalStrategy_base: new (...args: any[]) => any;
export declare class UserLocalStrategy extends UserLocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<any>;
}
export {};
