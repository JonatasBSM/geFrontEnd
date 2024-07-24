export default defineNuxtRouteMiddleware(() => {
  const auth = false;
  if(auth) {
    return navigateTo('/');
  }
})