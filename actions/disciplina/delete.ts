export async function delete_row(id: Number) {
    await useDelete(`/api/disciplina/${id}`, {}, true);
}