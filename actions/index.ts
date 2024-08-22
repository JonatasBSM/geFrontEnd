import auth from "./auth";
import tipoDocumento from "./tipoDocumento";

export default {
    auth, tipoDocumento
}

export interface BaseResponse<T> {
    status: string;
    message: string;
    data: T;
}