import type {BaseResponse} from "~/actions";

export async function list() {
    let response = await useGet('/api/documentacao');
    return response.data.value as BaseResponse<Array>;
}