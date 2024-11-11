import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit(): void {

    this.items = [
      {label: 'INICIO', icon: 'pi pi-fw pi-home'},
      {label: 'ACERCA DE NOSOTROS', icon: 'pi pi-fw pi-calendar'},
      {label: 'SERVICIOS', icon: 'pi pi-fw pi-pencil'},
      {label: 'CONTACTO', icon: 'pi pi-fw pi-file'},
  ];


  }

}
