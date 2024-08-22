import {list} from "./list";
import {create} from "./create";
import {update} from "./update";

export interface TipoDocumento {
    id: number;
    st_nome: string;
    st_descricao: string|null;
}

export default {
    list, create, update
}