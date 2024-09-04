import type {BaseResponse} from "~/actions";
import type {Cargo} from "~/actions/cargo/index";

export interface CreateCargoForm {
    st_nome: string;
    st_descricao: string|null;
}

export async function create(form: CreateCargoForm) {
    const response = await usePost('/api/cargo', {
        body: form
    }, true);

    return response.data as BaseResponse<Cargo>;
}