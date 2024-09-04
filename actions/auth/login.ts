import actions from "~/actions";
import {fetchUser} from "~/actions/auth/fetchUser";

export interface LoginForm {
    email: string;
    password: string;
    rememberMe: boolean;
}

export async function login(form: LoginForm) {
    
    await useGet('/sanctum/csrf-cookie');
    
    const response = await usePost('/login', {
        body: form
    });

    if(response.error?.value?.data?.message) {

        const toast = useToast();

        toast.add({
            title: 'Erro',
            description: response.error.value.data.message,
            icon:'i-heroicons-x-circle',
            color:'red'
        });

        return;
    }

    await fetchUser();
}