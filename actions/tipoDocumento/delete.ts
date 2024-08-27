import type {BaseResponse} from "~/actions";

export async function delete_row(id: Number) {
    await useDelete(`/api/tipo-documento/${id}`, {}, true);
}