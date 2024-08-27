export interface UpdateTipoDocumentoForm {
    id: number;
    st_nome: string;
    st_descricao: string|null;
}

export async function update(form: UpdateTipoDocumentoForm) {
    await usePut('/api/tipo-documento/' + form.id, {
        body: form
    }, true);
}