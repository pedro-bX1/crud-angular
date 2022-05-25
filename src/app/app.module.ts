import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PessoasService } from './_services/pessoas.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
