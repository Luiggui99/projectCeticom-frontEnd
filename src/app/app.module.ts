import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { FormsModule } from '@angular/forms';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { ListProductosComponent } from './list-productos/list-productos.component';
import { UpdateProductoComponent } from './update-producto/update-producto.component';
import { RegistrarCompraComponent } from './registrar-compra/registrar-compra.component';
import { ListVentasComponent } from './list-ventas/list-ventas.component';
import { ListDetalleVentaComponent } from './list-detalle-venta/list-detalle-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClientesComponent,
    RegistrarClienteComponent,
    RegistrarProductoComponent,
    ListProductosComponent,
    UpdateProductoComponent,
    RegistrarCompraComponent,
    ListVentasComponent,
    ListDetalleVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
