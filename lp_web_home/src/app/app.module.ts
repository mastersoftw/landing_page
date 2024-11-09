import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TabMenuModule } from 'primeng/tabmenu';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
