import type {BaseResponse} from "~/actions";
import type {SegmentoEscolar} from "~/actions/segmentoEscolar/index";

export interface updateSegmentoEscolarForm {
    id: number;
    st_nome: string;
    disciplinas: Array;
}

export async function update(form: updateSegmentoEscolarForm) {

    const response = await usePut('/api/segmento-escolar/'+form.id, {
        body: form
    }, true);

    return response.data.value as BaseResponse<SegmentoEscolar>;

}