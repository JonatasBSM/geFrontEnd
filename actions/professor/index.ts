import {list} from './list';
import {create, createProfessorForm} from './create';
import {update, updateProfessorForm} from './update';
import {delete_row} from './delete';

export interface Professor {
    //
}

export function new_row(): createProfessorForm {
    //
}

export default {
    list, create, update, delete_row, new_row
}