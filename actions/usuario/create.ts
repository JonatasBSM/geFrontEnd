import type {Usuario} from "~/actions/auth";
import type {BaseResponse} from "~/actions";

export interface CreateUsuarioForm {
    name: string;
    email: string;
    cargo_id?: number;
}

export async function create(form: CreateUsuarioForm) {
    const response = await usePost('/api/usuario', {
        body: form
    }, true);

    return response.data.value as BaseResponse<Usuario>;
}