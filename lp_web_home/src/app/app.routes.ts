import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
