import type {BaseResponse} from "~/actions";
import type {SegmentoEscolar} from "~/actions/segmentoEscolar/index";

export interface createSegmentoEscolarForm {
    st_nome: string;
    disciplinas: Array;
}

export async function create(form: createSegmentoEscolarForm) {

    const response = await usePost('/api/segmento-escolar', {
        body: form
    }, true);

    return response.data.value as BaseResponse<SegmentoEscolar>;

}
