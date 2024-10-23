import {list} from './list';
import {create, createEnderecoForm} from './create';
import {update, updateEnderecoForm} from './update';
import {delete_row} from './delete';
import {search_cep} from './searchCep';
import cidade from './cidade';
import estado from './estado';

export interface Endereco {
    //
}

export function new_row(): createEnderecoForm {
    //
}

export default {
    list, create, update, delete_row, new_row, search_cep, estado, cidade
}