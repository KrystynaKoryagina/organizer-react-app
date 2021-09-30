export interface IAuthResponse {
    data: string;
}

export interface ILoginUser {
    email: string;
    password: string;
}

export interface IRegisterUser extends ILoginUser {
    name: string;
    confirmPassword: string;
}
