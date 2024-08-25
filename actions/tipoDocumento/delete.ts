import type {BaseResponse} from "~/actions";

export async function delete_row(id: Number) {
    const response = await useDelete(`/api/tipo-documento/${id}`);
    return response.data.value as BaseResponse<any>;
}