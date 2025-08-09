import { sistemaOperativo } from "../enum/sistema_operativo.enum";

export class Aplicacion {
    constructor(
        public id: number,
        public nombre: string,
        public precio: number,
        public sistemaOperativo: sistemaOperativo,
        public calificacion: number,
        public tamanio: number,
        public version: string,
        public descargas: number
    ){}
}