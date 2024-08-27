export interface UpdateDocumentacaoForm {
    id: number,
    st_nome: string,
    ch_tipo_entidade: string,
    tipos_documentos: Array,
}

export async function update(form: UpdateDocumentacaoForm) {
    await usePut('/api/documentacao/' + form.id, {
        body: form
    }, true);
}