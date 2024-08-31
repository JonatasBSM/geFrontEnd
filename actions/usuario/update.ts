export interface UpdateUsuarioForm {
    name: string;
    email: string;
    cargo_id: string;
}

export async function update(form: UpdateUsuarioForm) {
    const response = await usePut('/api/usuario/' + form.id, {
        body: form
    }, true);

    return response.data.value as BaseResponse<Usuario>;
}