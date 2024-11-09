import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
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
