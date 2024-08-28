export async function delete_row(id: number) {
    await useDelete(`/api/periodo-letivo/${id}`, {}, true);
}