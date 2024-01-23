import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // URL da API
  private url:string = 'http://localhost:8080';
  private urlDeleter = 'http://localhost:8080/deletar/';
  private urlCadastro:string = 'http://localhost:8080/cadastrar';

  constructor(private http:HttpClient) {}
    
    // Método para selecionar todos os clientes
    selecionar():Observable<Cliente[]>{
      return this.http.get<Cliente[]>(this.url);
    }

    // Método para cadastrar clientes
    cadastrar(cliente:Cliente):Observable<Cliente>{
      return this.http.post<Cliente>(this.urlCadastro, cliente);
    }

    // Método para editar clientes
    editar(cliente:Cliente):Observable<Cliente>{
      return this.http.put<Cliente>(this.url, cliente);
    }

    // Método para editar clientes
    remover(id:number):Observable<void>{
      return this.http.delete<void>(this.urlDeleter + id);
    }
}
