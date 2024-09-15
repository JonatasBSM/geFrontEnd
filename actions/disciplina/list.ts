import type {BaseResponse} from "~/actions";

export async function list() {
    const response = await useGet('/api/disciplina');
    return response.data.value as BaseResponse<Array>;
}