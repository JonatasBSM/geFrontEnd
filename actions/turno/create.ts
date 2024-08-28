import type {Turno} from "~/actions/turno/index";
import type {BaseResponse} from "~/actions";

export interface CreateTurnoForm {
    st_nome: string;
}

export async function create(form: CreateTurnoForm) {
    const response = await usePost('/api/turno', {
        body: form
    }, true);

    return response.data.value as BaseResponse<Turno>;
}