import auth from "./auth";
import cargo from "./cargo";
import tipoDocumento from "./tipoDocumento";
import documentacao from "~/actions/documentacao";
import turno from "~/actions/turno";
import periodoLetivo from "~/actions/periodoLetivo";
import usuario from "~/actions/usuario";
import disciplina from "~/actions/disciplina";
import segmentoEscolar from "~/actions/segmentoEscolar";
import professor from "~/actions/professor";

export default {
    auth, usuario, cargo, tipoDocumento, documentacao, turno, periodoLetivo, disciplina, segmentoEscolar, professor
}

export interface BaseResponse<T> {
    status: string;
    message: string;
    data?: T;
}