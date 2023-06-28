import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ListProductosComponent } from './list-productos/list-productos.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { UpdateProductoComponent } from './update-producto/update-producto.component';
import { RegistrarCompraComponent } from './registrar-compra/registrar-compra.component';
import { ListVentasComponent } from './list-ventas/list-ventas.component';
import { ListDetalleVentaComponent } from './list-detalle-venta/list-detalle-venta.component';

const routes: Routes = [
  {path : "clientes", component:ListClientesComponent},
  {path: '', redirectTo:'clientes', pathMatch:'full'},
  {path: 'clientes/:registrar-cliente', component:RegistrarClienteComponent},
  {path: 'productos', component:ListProductosComponent},
  {path: 'productos/:registrar-producto', component:RegistrarProductoComponent},
  {path: 'productos/:update-producto/:id', component:UpdateProductoComponent},
  {path: 'comprar/:registrar-compra/:id', component:RegistrarCompraComponent},
  {path: 'ventas', component:ListVentasComponent},
  {path: 'ventas/:list-detalle-venta/:id', component:ListDetalleVentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
