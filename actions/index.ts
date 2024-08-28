import auth from "./auth";
import tipoDocumento from "./tipoDocumento";
import documentacao from "~/actions/documentacao";
import turno from "~/actions/turno";

export default {
    auth, tipoDocumento, documentacao, turno
}

export interface BaseResponse<T> {
    status: string;
    message: string;
    data?: T;
}