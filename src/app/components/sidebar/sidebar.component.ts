import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  materias: string[] = [
    'Programacion II',
    'Bases de Datos',
    'Redes y Comunicacion',
    'Derecho y Legislacion Laboral', 
    'Practicas Profesionalizantes',
    'Gestion de Proyectos'
  ];
}
