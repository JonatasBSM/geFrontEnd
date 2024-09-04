import type {BaseResponse} from "~/actions";
import type {Cargo} from "~/actions/cargo/index";

export interface UpdateCargoForm {
    id: number;
    st_nome: string;
    st_descricao: string|null;
}

export async function update(form: UpdateCargoForm) {
    const response = await usePut(`/api/cargo/${form.id}`, {
        body: form
    }, true);

    return response.data as BaseResponse<Cargo>;
}