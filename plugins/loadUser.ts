import {useAuthStore} from '~/stores/useAuthStore';

export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore();

    if(!auth.flLoggedIn) {
        try {
            await auth.fetchUser();
        } catch(e) {
            navigateTo('/login');
        }
    } 
})
