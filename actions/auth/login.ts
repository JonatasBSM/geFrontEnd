import actions from "~/actions";
import {fetchUser} from "~/actions/auth/fetchUser";

export interface LoginForm {
    email: string;
    password: string;
    rememberMe: boolean;
}

export async function login(form: LoginForm) {
    
    await useGet('/sanctum/csrf-cookie');
    
    await usePost('/login', {
        body: form
    });

    await fetchUser();
}