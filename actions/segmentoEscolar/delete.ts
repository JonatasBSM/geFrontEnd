export async function delete_row(id: Number) {
    await useDelete(`/api/segmento-escolar/${id}`);
}