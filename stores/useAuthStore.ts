import { navigateTo } from "nuxt/app";
import { useApi } from "~/composables/useApi";
import type {User} from "~/actions/auth/fetchUser";

export const useAuthStore = defineStore('auth', () => {

    const user = ref<User|null>(null);
    const flLoggedIn = computed(() => !!user.value);

    const setUser = (newUser: User|null) => {
        user.value = newUser;
    }

    return {setUser, user, flLoggedIn};
});