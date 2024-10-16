import type {BaseResponse} from "~/actions";
import type {Endereco} from "~/actions/endereco/index";

export interface updateEnderecoForm {
    //
}

export async function update(form: updateEnderecoForm) {

    const response = await usePut('/api/endereco/form.id', {
        body: form
    }, true);

    return response.data.value as BaseResponse<Endereco>;

}