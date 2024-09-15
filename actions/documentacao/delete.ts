export async function delete_row(id: Number) {
    await useDelete(`/api/documentacao/${id}`, {}, true);
}