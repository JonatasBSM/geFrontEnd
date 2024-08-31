import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuthStore } from "~/stores/useAuthStore";

export default defineNuxtRouteMiddleware((to,from) => {

    const auth = useAuthStore();


    if(!auth.flLoggedIn) {
        return navigateTo('/login');
    }
})