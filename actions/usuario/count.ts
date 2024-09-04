import type {BaseResponse} from "~/actions";

export async function count() {
    const response = await useGet('/api/usuario/key-performance-indicative/count', {}, true);
    return response.data.value as BaseResponse<Number>;
}