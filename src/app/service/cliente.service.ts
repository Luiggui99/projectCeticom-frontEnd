import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../class/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = 'http://localhost:8080/api/v1/clientes';
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getAll():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  save(cliente:Cliente) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cliente);
  }

  getId(id: number) : Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }
}
