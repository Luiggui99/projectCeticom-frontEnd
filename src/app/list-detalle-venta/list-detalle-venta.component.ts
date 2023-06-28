import { Component, OnInit } from '@angular/core';
import { VentaService } from '../service/venta.service';
import { ClienteService } from '../service/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { Venta } from '../class/venta';
import { Cliente } from '../class/cliente';
import { ProductoService } from '../service/producto.service';
import { DetalleVentaService } from '../service/detalle-venta.service';
import { Producto } from '../class/producto';

@Component({
  selector: 'app-list-detalle-venta',
  templateUrl: './list-detalle-venta.component.html',
  styleUrls: ['./list-detalle-venta.component.css']
})
export class ListDetalleVentaComponent implements OnInit{

  id : number;
  total: number;
  venta : Venta = new Venta();
  cliente : Cliente = new Cliente();
  productos : Producto[] = [];
  itemProducto: Producto = new Producto();

  constructor(
    private route: ActivatedRoute,
    private ventaService: VentaService,
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private detalleService: DetalleVentaService
  ){}

  ngOnInit(): void {
      this.getVenta();
  }

  getVenta(){
    this.id = this.route.snapshot.params['id'];
    this.ventaService.getId(this.id).subscribe( (response: any) =>{
      this.venta = response;
      this.cliente = response.cliente;
      this.detalleService.getAll()
        .subscribe( (resp:any) => {
          resp.forEach((element: any) => {
            if(element.venta.id == this.venta.id){
              this.itemProducto = element.producto;
              this.itemProducto.cantidad = element.cantidad;
              this.productos.push(this.itemProducto);
            }
          });
          let datoArray: any[] = [];    
          this.productos.forEach((element: any) => {
            let result = element.precio * element.cantidad;
            datoArray.push(result);
          });

          this.total =datoArray.reduce((accumulator, currentValue) => accumulator + currentValue);
      })
    });
  }

  getProducts(){
    this.detalleService.getAll()
    .subscribe( (resp) => {

    })
  }
}
