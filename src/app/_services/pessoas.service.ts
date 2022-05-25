import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoas } from '../_interfaces/pessoas.interface';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) { }
  obterPessoas(){
  return this.http.get('');
}
}
