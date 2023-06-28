import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venta } from '../class/venta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private baseURL = "http://localhost:8080/api/v1/ventas";

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Venta[]>{
    return this.httpClient.get<Venta[]>(`${this.baseURL}`);
  }

  save(venta: Venta): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, venta);
  }

  getId(id: number) : Observable<Venta>{
    return this.httpClient.get<Venta>(`${this.baseURL}/${id}`);
  }
}
