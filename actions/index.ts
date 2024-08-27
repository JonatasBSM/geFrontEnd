import auth from "./auth";
import tipoDocumento from "./tipoDocumento";
import documentacao from "~/actions/documentacao";

export default {
    auth, tipoDocumento, documentacao
}

export interface BaseResponse<T> {
    status: string;
    message: string;
    data?: T;
}