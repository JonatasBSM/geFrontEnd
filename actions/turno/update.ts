import type {Turno} from "~/actions/turno/index";
import type {BaseResponse} from "~/actions";

export interface UpdateTurnoForm {
    id: number,
    st_nome: string
}

export async function update(form: UpdateTurnoForm) {
    const response = await usePut('/api/turno/' + form.id, {
        body: form
    }, true);

    return response.data.value as BaseResponse<Turno>;
}

