export interface UpdateTipoDocumentoForm {
    id: number;
    st_nome: string;
    st_descricao: string|null;
}

export async function update(tipoDocumento: UpdateTipoDocumentoForm) {
    await usePut('/api/tipo-documento/' + tipoDocumento.id, {
        body: tipoDocumento
    });
}