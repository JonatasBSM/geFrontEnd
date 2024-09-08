import auth from "./auth";
import cargo from "./cargo";
import tipoDocumento from "./tipoDocumento";
import documentacao from "~/actions/documentacao";
import turno from "~/actions/turno";
import periodoLetivo from "~/actions/periodoLetivo";
import usuario from "~/actions/usuario";
import disciplina from "~/actions/disciplina";

export default {
    auth, usuario, cargo, tipoDocumento, documentacao, turno, periodoLetivo, disciplina
}

export interface BaseResponse<T> {
    status: string;
    message: string;
    data?: T;
}