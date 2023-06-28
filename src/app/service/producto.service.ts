import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../class/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseURL = 'http://localhost:8080/api/v1/productos';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }

  save(producto:Producto) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, producto);
  }

  update(id: number, producto:Producto) : Observable<Object>{
    return this.httpClient.put<Producto>(`${this.baseURL}/${id}`, producto);
  }

  getId(id: number) : Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseURL}/${id}`);
  }

  delete(id: number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
