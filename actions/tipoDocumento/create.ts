export interface CreateTipoDocumentoForm {
    st_nome: string;
    st_descricao: string|null;
}

export async function create(newTipoDocumento: CreateTipoDocumentoForm) {
    await usePost('/api/tipo-documento', {
        body: newTipoDocumento
    });
}