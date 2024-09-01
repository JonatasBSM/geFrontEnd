import type {BaseResponse} from "~/actions";
import {navigateTo} from "nuxt/app";


export interface ResetPasswordForm {
    'email': string;
    'password': string;
    'confirm-password': string;
    'token': string;
}

export async function reset_password(form:ResetPasswordForm) {

    await useGet('/sanctum/csrf-cookie');

    const response =  await usePost('/reset-password', {
        body: form
    });

    const toast = useToast();

    if(response.error?.value?.data?.message) {
        toast.add({
            title: 'Erro',
            description: response.error.value.data.message,
            icon:'i-heroicons-x-circle',
            color:'red'
        });
    }

    console.log(response.data)
    if(response.data?.value?.status) {
        toast.add({
            title: 'Sucesso',
            description: response.data.value.status,
            type: 'success',
            icon:'i-heroicons-check-circle'
        });

        return navigateTo('/login');
    }

}