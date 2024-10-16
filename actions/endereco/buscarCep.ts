import type {BaseResponse} from "~/actions";
import type {Endereco} from "~/actions/endereco/index";

export async function buscar_cep(cep: string) {
    const response = await useGet(`/api/cep/${cep}`);
    return response.data.value as BaseResponse<Endereco>;
}