import { Component } from '@angular/core';
import { Producto } from '../class/producto';
import { ProductoService } from '../service/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent {

  producto: Producto = new Producto();

  constructor (
    private productoService: ProductoService,
    private router: Router
  ){}

  saveCliente(){
    this.productoService.save(this.producto)
    .subscribe( response => {
      this.redirectList();   
    })
  }

  redirectList(){
    this.router.navigate(['/productos']);
  }

  OnSubmit(){
    this.saveCliente();
  }
}
