declare const UserJwtStrategy_base: new (...args: any[]) => any;
export declare class UserJwtStrategy extends UserJwtStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        id: any;
        email: any;
    }>;
}
export {};
