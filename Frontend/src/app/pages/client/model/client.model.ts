export interface Client {
    id: number;
    nombre: string;
    apellido: string;
    email?: string;
    direccion?: string;
    telefono?: string;
    tmstmp?: Date;
}