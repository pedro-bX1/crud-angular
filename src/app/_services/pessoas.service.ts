import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoas } from '../_interfaces/pessoas.interface';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  id!:string;
  constructor(private http: HttpClient) { }
  obterPessoas(){
  return this.http.get('http://localhost/phpCrud/consulta.php');
}
  guardarPessoas(nome:string, matricula:number, salario:number, cargo:string,especializacao:string){
    return this.http.get('http://localhost/phpCrud/salvar.php?nome='%nome%'&matricula='%matricula%'&salario='%salario%'&cargo='%cargo%'&especializacao='%espacializacao%'');
  }

  apagarPessoas(id:string){
    return this.http.get('http://localhost/phpCrud/apagar.php?id='id);
  }setId(id:string){
    this.id=id;
  }getId(){
    this.id;
  }
  editarPessoas(nome:string, matricula:number, salario:number, cargo:string,especializacao:string){
    return this.http.get('http://localhost/phpCrud/editar.php?nome='%nome%'&matricula='%matricula%'&salario='%salario%'&cargo='%cargo%'&especializacao='%espacializacao%'');
  }
}
