import { Component, OnInit } from '@angular/core';
import { Producto } from '../class/producto';
import { ProductoService } from '../service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-producto',
  templateUrl: './update-producto.component.html',
  styleUrls: ['./update-producto.component.css']
})
export class UpdateProductoComponent implements OnInit{

  id : number;
  producto : Producto = new Producto();

  constructor(
    private productoService: ProductoService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.getId(this.id).subscribe( response =>{
      this.producto = response;
    });
  }

  redirectListProds(){
    this.router.navigate(['/productos']);
    // swal('Producto actualizado',`El producto ${this.producto.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.productoService.update(this.id, this.producto)
    .subscribe( () => {
      this.redirectListProds();
    })
  }
}
