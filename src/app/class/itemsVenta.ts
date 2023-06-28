import { Cliente } from "./cliente";

export class itemsVenta{
    id?: number;
    cliente?: Cliente;
    fecha?: string;
    total?: number | undefined;
}