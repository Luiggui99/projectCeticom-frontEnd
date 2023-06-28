import { Component, OnInit } from '@angular/core';
import { DetalleVentaService } from '../service/detalle-venta.service';
import { Venta } from '../class/venta';
import { VentaService } from '../service/venta.service';
import { itemsVenta } from '../class/itemsVenta';
import { total } from '../class/total';
import { DetalleVenta } from '../class/detalle-venta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ventas',
  templateUrl: './list-ventas.component.html',
  styleUrls: ['./list-ventas.component.css']
})
export class ListVentasComponent implements OnInit{

  public ventas!:Array<Venta>;
  public detalleventas!:Array<DetalleVenta> | any;
  public page!: number;
  public itemsVenta!: Array<itemsVenta>

  constructor (
    private router: Router,
    private detalleVentaService: DetalleVentaService,
    private ventaService: VentaService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll(){
    let itotal: total = {
      idventa: 0,
      precio: 0,
      cantidad: 0
    }

    this.ventaService.getAll()
    .subscribe( (resp) => {
      this.ventas = resp;
      
    })
  }

  detalleVenta(id: number){
    this.router.navigate(['ventas/list-detalle-venta', id]);
  }
  
}
