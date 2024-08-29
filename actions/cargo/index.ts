import {list} from './list';
import {create, CreateCargoForm} from './create';
import {update} from './update';
import {delete_row} from './delete';

export interface Cargo {
    id: number;
    st_nome: string;
    st_descricao: string|null;
}

export function new_row(): CreateCargoForm {
    return {
        st_nome: ''
    }
}

export default {
    list, create, update, delete_row, new_row
}