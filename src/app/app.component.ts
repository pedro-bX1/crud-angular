import { Component, OnInit } from '@angular/core';
import {Pessoas} from './_interfaces/pessoas.interface';

import { PessoasService } from './_services/pessoas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular';

  pessoas!:Pessoas[];

  constructor(private servicoPessoas: PessoasService){}

  ngOnInit(){
    this.chamarServico();

  }


  chamarServico(){
    this.servicoPessoas.obterPessoas().subscribe((pessoas:Pessoas[])=>{
      console.log(pessoas);
      this.pessoas=pessoas;
    });
  }
} 


