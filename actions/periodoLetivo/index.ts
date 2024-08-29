import {list} from './list';
import {create, CreatePeriodoLetivoForm} from './create';
import {update, UpdatePeriodoLetivoForm} from './update';
import {delete_row} from './delete';

export interface PeriodoLetivo {
    id: number;
    turno_id?: number;
    st_nome: string;
}

export function new_row():CreatePeriodoLetivoForm {
    return {
        st_nome: '',
        turnos: []
    }
}

export default {
    list, create, update, delete_row, new_row
}