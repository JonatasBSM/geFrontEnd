export async function delete_row(id: number) {
    await useDelete(`/api/cargo/${id}`, {}, true);
}