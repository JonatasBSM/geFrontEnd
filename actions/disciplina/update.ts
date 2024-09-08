import type {BaseResponse} from "~/actions";
import type {Disciplina} from "~/actions/disciplina/index";

export interface EditDisciplinaForm {
    id: number;
    st_nome: string;
    st_descricao: string|null;
}

export async function update(form: EditDisciplinaForm) {
    const response = await usePut('/api/disciplina/' + form.id, {
        body: form
    }, true);

    return response.data.value as BaseResponse<Disciplina>;
}