import type {BaseResponse} from "~/actions";
import type {Professor} from "~/actions/professor/index";

export interface createProfessorForm {
    //
}

export async function create(form: createProfessorForm) {

    const response = await usePost('/api/professor', {
        body: form
    }, true);

    return response.data.value as BaseResponse<Professor>;

}
