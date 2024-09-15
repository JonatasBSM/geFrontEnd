import type {BaseResponse} from "~/actions";
import type {Disciplina} from "~/actions/disciplina/index";

export interface CreateDisciplinaForm {
    st_nome: string;
    st_descricao: string | null;
}

export async function create(form: CreateDisciplinaForm) {

    const response = await usePost('/api/disciplina', {
        body: form
    }, true);

    return response.data.value as BaseResponse<Disciplina>;
}