import {list} from "./list";
import {create, CreateTurnoForm} from "./create";
import {update} from "./update";
import {delete_row} from "./delete";


export interface Turno {
    id: number;
    st_nome: string;
}


export function new_row():CreateTurnoForm {
    return {
        st_nome: ''
    }
}

export default {
    list, create, update, delete_row, new_row
}