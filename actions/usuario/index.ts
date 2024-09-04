import {list} from './list';
import {create, CreateUsuarioForm} from './create';
import {update} from './update';
import {delete_row} from './delete';
import {count} from "./count";

export interface Usuario {
    id: number;
    nome: string;
    email: string;
    cargo_id: number;
}

export function new_row(): CreateUsuarioForm {
    return {
        name: '',
        email: '',
        password: '',
        cargo_id: ''
    }
}

export default {
    list, create, update, count, delete_row, new_row
}
