import type {BaseResponse} from "~/actions";

export async function list() {
    const response = await useGet('/api/usuario', {}, true);

    return response.data.value as BaseResponse<aray>;
}