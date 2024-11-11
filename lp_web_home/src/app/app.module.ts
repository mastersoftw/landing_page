
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TagModule } from 'primeng/tag';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

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
    TabMenuModule,
    TagModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
