import type {TipoDocumento} from "~/actions/tipoDocumento/index";
import type {BaseResponse} from "~/actions";

export interface CreateTipoDocumentoForm {
    st_nome: string;
    st_descricao: string|null;
}

export async function create(form: CreateTipoDocumentoForm) {
    const $response = await usePost('/api/tipo-documento', {
        body: form
    });

    return $response.data.value as BaseResponse<TipoDocumento>;

}