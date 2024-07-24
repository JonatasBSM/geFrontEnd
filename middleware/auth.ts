export default defineNuxtRouteMiddleware(() => {
    const auth = true;
    if(!auth) {
        return navigateTo('/login');
    }
})