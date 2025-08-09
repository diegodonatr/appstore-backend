import { Aplicacion } from "src/aplicaciones/models/aplicacion.models";

export class Resenia {
    constructor(
        public id: number,
        public usuario: string,
        public aplicacion: Aplicacion[],
        public calificacion: number,
        public texto: string,
        public fecha: Date
    ){};
};