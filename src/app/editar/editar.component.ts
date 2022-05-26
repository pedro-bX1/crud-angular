import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";   
import{Peronda}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  nome=new FormControl('');
  matricula=new FormControl('');
  salario=new FormControl('');
  cargo=new FormControl('');
  especializacao=new FormControl('');

  

  constructor(private servicoPessoas: PessoasService) { }

  ngOnInit(): void {
  }
  editar(){
    this.servicoPessoas.editarPessoas()
  }
}
