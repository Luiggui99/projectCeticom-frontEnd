import { Component, OnInit } from '@angular/core';
import { Cliente } from '../class/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  clientes !:Array<Cliente>;

  constructor(
    private clienteService:ClienteService,
    private router:Router
  ){ }

  ngOnInit(): void {
      this.getAll();
  }

  private getAll(){
    this.clienteService.getAll()
    .subscribe( response => {
      this.clientes = response;
    })
  }

  comprar(id: number){
    this.router.navigate(['comprar/update-compra', id]);
  }
}
