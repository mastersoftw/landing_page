import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  formContact: FormGroup;
  build: FormBuilder;
  valorRadio: string;

  items: MenuItem[];

  constructor( ) {}



  ngOnInit(): void {
    this.buildForm();

    this.items = [
      {label: 'INICIO', icon: 'pi pi-fw pi-home'},
      {label: 'ACERCA DE NOSOTROS', icon: 'pi pi-fw pi-calendar'},
      {label: 'SERVICIOS', icon: 'pi pi-fw pi-pencil'},
      {label: 'CONTACTO', icon: 'pi pi-fw pi-file'},
    ];
  }

  buildForm(): void{
    this.formContact = this.build.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required, Validators.email],
      comentarios: ['']
    });
  }

}
