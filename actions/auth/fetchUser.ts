export interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

export async function fetchUser() {
    const user = await useGet('/api/user');
    useAuthStore().setUser(user.data.value as User);
}