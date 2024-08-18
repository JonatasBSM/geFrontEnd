import {useApi} from "~/composables/useApi";
import {navigateTo} from "nuxt/app";

export async function logout() {

    await useGet('/sanctum/csrf-cookie');

    await usePost('/logout');

    useAuthStore().setUser(null);
    navigateTo('/login');
}