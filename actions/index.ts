import auth from "./auth";
import tipoDocumento from "./tipoDocumento";
import documentacao from "~/actions/documentacao";
import turno from "~/actions/turno";
import periodoLetivo from "~/actions/periodoLetivo";

export default {
    auth, tipoDocumento, documentacao, turno, periodoLetivo
}

export interface BaseResponse<T> {
    status: string;
    message: string;
    data?: T;
}