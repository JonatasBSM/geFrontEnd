import {list} from './list';
import {create, createSegmentoEscolarForm} from './create';
import {update, updateSegmentoEscolarForm} from './update';
import {delete_row} from './delete';

export interface SegmentoEscolar {
    id: number;
    st_nome: string;
    disciplinas: Array;
}

export function new_row(): createSegmentoEscolarForm {
    return {
        st_nome: '',
        disciplinas: []
    }
}

export default {
    list, create, update, delete_row, new_row
}