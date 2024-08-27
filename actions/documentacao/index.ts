import { list } from "./list";
import { create, CreateDocumentacaoForm } from "./create";
import { update } from "./update";
import { delete_row } from "./delete";

export interface Documentacao {
    id: number;
    st_nome: string;
    ch_tipo_entidade: string;
    tipos_documentos: Array;
}

export function new_row(): CreateDocumentacaoForm {
    return {
        st_nome: "",
        ch_tipo_entidade: "",
        tipos_documentos: []
    };
}

export default {
    list, create, update, delete_row, new_row
}