export async function delete_row(id: Number) {
    const response = await useDelete(`/api/documentacao/${id}`);
    return response.data.value as BaseResponse<any>;
}