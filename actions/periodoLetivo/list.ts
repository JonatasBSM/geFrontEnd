import type {BaseResponse} from "~/actions";

export async function list() {
    const response = await useGet('/api/periodo-letivo', true);
    return response.data.value as BaseResponse<Array>;
}