import {list} from './list';
import {create, createEnderecoForm} from './create';
import {update, updateEnderecoForm} from './update';
import {delete_row} from './delete';
import {buscar_cep} from './buscarCep';
import cidade from './cidade';
import estado from './estado';

export interface Endereco {
    //
}

export function new_row(): createEnderecoForm {
    //
}

export default {
    list, create, update, delete_row, new_row, buscar_cep, estado, cidade
}