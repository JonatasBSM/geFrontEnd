import {list} from "./list";
import {create, CreateTipoDocumentoForm} from "./create";
import {update} from "./update";
import {delete_row} from "./delete";

export interface TipoDocumento {
    id: number;
    st_nome: string;
    st_descricao: string|null;
}

export function new_row():CreateTipoDocumentoForm {
    return {
        st_nome: "",
        st_descricao: null
    }
}

export default {
    list, create, update, delete_row, new_row
}
