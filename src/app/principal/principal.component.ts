import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Cliente } from './../model/Cliente';
import { ClienteService } from './../servico/cliente.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  // Objeto do tipo Cliente
  cliente = new Cliente();

  // Variavel para visibilidade dos botões
  btnCadastro:Boolean = true;

  // Variavel para visibilidade do formulario
  tabela:Boolean = true;

  // Vetor (Json) do tipo cliente
  clientes:Cliente[] = [];

  // Contrustor para service
  constructor(private servico:ClienteService){}

  // Método de seleção
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  // Método de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {
      // Cadastrar cliente e atualizar lista no vetor
      this.clientes.push(retorno);
      // Limpar campos do formulario
      this.cliente = new Cliente();

      alert("Cliente cadastrado com sucesso!");
    });
  }

  // Método para selecionar um cliente
  selecionarCliente(posicao:number):void{

    //Selecionar cliente no vetor
    this.cliente = this.clientes[posicao];

    //Visibilidade dos botões e da tabela
    this.btnCadastro = false;
    this.tabela = false;

  }

  // Método de inicialização
  ngOnInit(){
    this.selecionar();
  }
}
