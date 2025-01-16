import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { MenunavbarComponent } from './menunavbar/menunavbar.component';
import { HomeComponent } from './home/home.component';
import { SevasComponent } from './sevas/sevas.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginComponent,
    MenunavbarComponent,
    HomeComponent,
    SevasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
