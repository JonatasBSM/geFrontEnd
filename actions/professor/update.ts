import type {BaseResponse} from "~/actions";
import type {Professor} from "~/actions/professor/index";

export interface updateProfessorForm {
    //
}

export async function update(form: updateProfessorForm) {

    const response = await usePut('/api/professor/form.id', {
        body: form
    }, true);

    return response.data.value as BaseResponse<Professor>;

}