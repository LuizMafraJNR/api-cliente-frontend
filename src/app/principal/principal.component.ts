import { ClienteService } from './../servico/cliente.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/Cliente';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  // Variavel para visibilidade dos botões
  btnCadastro:Boolean = true;

  // Vetor (Json) do tipo cliente
  clientes:Cliente[] = [];

  // Contrustor para service
  constructor(private servico:ClienteService){}

  // Método de seleção
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  // Método de inicialização
  ngOnInit(){
    this.selecionar();
  }
}
