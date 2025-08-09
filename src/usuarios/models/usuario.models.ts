import { Aplicacion } from "src/aplicaciones/models/aplicacion.models";

export class Usuario {
    constructor(
        public nombreUsuario: string,
        public email: string,
        public password: string,
        public aplicacionesDescargadas: Aplicacion[]
    ){};
};