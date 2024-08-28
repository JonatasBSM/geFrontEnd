import type {BaseResponse} from "~/actions";

export interface CreatePeriodoLetivoForm {
    st_nome: string;
    turnos: array
}

export async function create(form: CreatePeriodoLetivoForm) {
    const response = await usePost('/api/periodo-letivo', {
        body: form
    }, true);

    return response.data.value as BaseResponse<PeriodoLetivo>;
}
