import { Component, OnInit } from '@angular/core';
import { Cliente } from '../class/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit{

  cliente: Cliente = new Cliente();
  constructor(
    private clienteService:ClienteService,
    private router:Router
  ) {}

  ngOnInit(): void {
    
  }

  saveCliente(){
    this.clienteService.save(this.cliente)
    .subscribe( response => {
      this.redirectList();   
    })
  }

  redirectList(){
    this.router.navigate(['/clientes']);
  }

  OnSubmit(){
   this.saveCliente();
  }
}
