import type {BaseResponse} from "~/actions";
import type {Endereco} from "~/actions/endereco/index";

export interface createEnderecoForm {
    //
}

export async function create(form: createEnderecoForm) {

    const response = await usePost('/api/endereco', {
        body: form
    }, true);

    return response.data.value as BaseResponse<Endereco>;

}
