import type {BaseResponse} from "~/actions";

export async function list() {
    let response = await useGet('/api/tipo-documento');
    return response.data.value as BaseResponse<Array>;
}