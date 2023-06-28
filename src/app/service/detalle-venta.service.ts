import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleVenta } from '../class/detalle-venta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {

  private baseURL = "http://localhost:8080/api/v1/detalleVenta";

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll():Observable<DetalleVenta[]>{
    return this.httpClient.get<DetalleVenta[]>(`${this.baseURL}`);
  }

  save(detalleVenta: DetalleVenta): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, detalleVenta);
  }

  getId(id: number): Observable<Object>{
    return this.httpClient.get<DetalleVenta>(`${this.baseURL}/${id}`);
  }
}
