import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../class/cliente';
import { Producto } from '../class/producto';
import { ProductoService } from '../service/producto.service';
import { itemCart } from '../class/itemCart';
import { DatePipe } from '@angular/common';
import { VentaService } from '../service/venta.service';
import { Venta } from '../class/venta';
import { DetalleVenta } from '../class/detalle-venta';
import { DetalleVentaService } from '../service/detalle-venta.service';

@Component({
  selector: 'app-registrar-compra',
  templateUrl: './registrar-compra.component.html',
  styleUrls: ['./registrar-compra.component.css']
})
export class RegistrarCompraComponent implements OnInit{

  id : number;
  cliente : Cliente = new Cliente();
  venta: Venta = new Venta();
  detalleVenta: DetalleVenta = new DetalleVenta();

  private today = Date.now();
  private pipe = new DatePipe('en-US');
  public productos!:Array<Producto>;
  public page !: number;

  listCart: itemCart[] | undefined;
  getVenta: {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private ventaService: VentaService,
    private detalleVentaService: DetalleVentaService
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.getId(this.id).subscribe( response =>{
      this.cliente = response;
    });
    this.getAllProducts();
    this.getCart();
  }

  private getAllProducts(){
    this.productoService.getAll()
    .subscribe( response => {
      this.productos = response;
    })
  }
  
  addCart(producto: Producto){
    let itemCart: itemCart = {
      idproducto : producto.id,
      nombre: producto.nombre,
      precio: Number(producto.precio),
      cantidad: 1
    }
    if(localStorage.getItem('cart') === null){
      let cart: itemCart[] = [];
      cart.push(itemCart);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cartStorage = localStorage.getItem('cart') as string;
      let cart = JSON.parse(cartStorage);
      
      let index = -1;
      for(let i = 0; i < cart.length; i++){
        let itemC: itemCart = cart[i];
        if(itemCart.idproducto === itemC.idproducto){
          index = i; break;
        }
      }
      if(index === -1){
        cart.push(itemCart);
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let itemCart: itemCart = cart[index];
        itemCart.cantidad!++;
        cart[index] = itemCart;
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
    this.getCart();
  }

  getCart(){
    let cartStorage = localStorage.getItem('cart') as string;
    let cart = JSON.parse(cartStorage);
    this.listCart = cart;
  }

  resetCart(){
    localStorage.clear();
    this.listCart = [];
  }

  saveVenta(){
    let today = this.pipe.transform(this.today, 'YYYY-MM-dd') as string;
    this.venta.cliente = this.cliente;
    this.venta.fecha = today;
    this.ventaService.save(this.venta)
    .subscribe( (resp1: any)  => {
      this.detalleVenta.venta = resp1;
      this.listCart?.forEach( element => {
        this.productoService.getId(element.idproducto as number)
        .subscribe( resp2 => {
          this.detalleVenta.cantidad = element.cantidad;
          this.detalleVenta.producto = resp2;
          this.detalleVentaService.save(this.detalleVenta)
          .subscribe( resp => {
            this.router.navigate(['/ventas']);
          })
        })
      });
    })
  }
}
