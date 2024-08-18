import { navigateTo } from 'nuxt/app';
import {useAuthStore} from '~/stores/useAuthStore';

export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore();

    if(!auth.flLoggedIn) {
        try {
            await auth.fetchUser();
            navigateTo('/');
        } catch(e) {
            navigateTo('/login');
        }
    } 
})
