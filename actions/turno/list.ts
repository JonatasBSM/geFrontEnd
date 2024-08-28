import type {BaseResponse} from "~/actions";
import type {Turno} from "~/actions/turno/index";

export async function list() {
    const response = await useGet('/api/turno');
    return response.data.value as BaseResponse<any>;
}