import type {PeriodoLetivo} from "~/actions/periodoLetivo/index";

export interface UpdatePeriodoLetivoForm {
    id: number;
    turno_id?: number;
    st_nome: string;
    turnos: array
}

export async function update(form: UpdatePeriodoLetivoForm) {

    const response = await usePut('/api/periodo-letivo/' + form.id, {
        body: form
    }, true);

    return response.data.value as BaseResponse<PeriodoLetivo>;

}