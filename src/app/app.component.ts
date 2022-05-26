import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Pessoas} from './_interfaces/pessoas.interface';

import { PessoasService } from './_services/pessoas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular';
  nome=new FormControl('');
  matricula=new FormControl('');
  salario=new FormControl('');
  cargo=new FormControl('');
  especializacao=new FormControl('');

  pessoas!:Pessoas[];

  constructor(private servicoPessoas: PessoasService){}

  ngOnInit(){
    this.chamarServico();

  }

  chamarServico(){
    this.servicoPessoas.obterPessoas().subscribe((data:Pessoas[])=>{
    this.pessoas=data;
    });
  }

  
  guardar(){
    this.servicoPessoas.guardarPessoas(this.nome.value, this.matricula.value, this.salario.value, this.cargo.value, this.especializacao).subscribe((pessoas:Pessoas[])=>{
      console.log(snap);
    });
  }
  apagar(id:string){
    this.servicoPessoas.apagarPessoas(id).subscribe(snap=>{
      return console.log(snap);
    });
    this.ngOnInit();
  }

  editar(id:string){
    this.servicoPessoas.setId(id);
  }
} 


