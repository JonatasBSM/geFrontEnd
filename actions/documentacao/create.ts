import type {BaseResponse} from "~/actions";
import type {Documentacao} from "~/actions/documentacao/index";

export interface CreateDocumentacaoForm {
    st_nome: string,
    ch_tipo_entidade: string,
    tipos_documentos: Array,
}

export async function create(form: CreateDocumentacaoForm) {
    const response = await usePost('/api/documentacao', {
        body: form
    }, true);
    return response.data.value as BaseResponse<Documentacao>;
}