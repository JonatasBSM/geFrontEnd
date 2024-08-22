import type {TipoDocumento} from "~/actions/tipoDocumento/index";

export interface CreateTipoDocumentoForm {
    st_nome: string;
    st_descricao: string|null;
}

export async function create(newTipoDocumento: CreateTipoDocumentoForm) {
    const $response = await usePost('/api/tipo-documento', {
        body: newTipoDocumento
    });

    return $response.data.value as BaseResponse<TipoDocumento>;

}