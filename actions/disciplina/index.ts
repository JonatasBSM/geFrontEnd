import {list} from './list';
import {create, CreateDisciplinaFormForm} from './create';
import {update} from './update';
import {delete_row} from './delete';

export interface Disciplina {
    id: number;
    st_nome: string;
    st_descricao: string|null;
}

export function new_row():CreateDisciplinaFormForm {
    return {
        st_nome: "",
        st_descricao: null
    }
}

export default {
    list, create, update, delete_row, new_row
}