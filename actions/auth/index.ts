import { login } from './login';
import { logout } from './logout';
import { list } from './list';
import {create, CreateUsuarioForm} from './create';
import {update} from './update';
import {delete_row} from './delete';

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
    login, logout, list, create, update, delete_row, new_row
}