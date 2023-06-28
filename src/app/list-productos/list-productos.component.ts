import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Producto } from '../class/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit{

  public productos!:Array<Producto>;
  public page !: number;

  constructor(
    private productoService: ProductoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getAll();
  }

  updateProd(id: number){
    this.router.navigate(['productos/update-producto', id]);
  }

  deleteProd(id: number){
    this.productoService.delete(id)
    .subscribe(()=>{
      this.getAll();
    })
  }

  private getAll(){
    this.productoService.getAll()
    .subscribe( response => {
      this.productos = response;
    })
  }
}
