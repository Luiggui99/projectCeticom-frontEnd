import { Producto } from "./producto";
import { Venta } from "./venta";

export class DetalleVenta {
    id?: number;
    cantidad ?: number;
    producto?: Producto;
    venta?: Venta;
}
