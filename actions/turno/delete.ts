export async function delete_row(id: number) {
    await useDelete('/api/turno/' + id, {}, true);
}