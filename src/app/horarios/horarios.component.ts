import { Component } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  // Declaramos la propiedad selectedDay
  selectedDay: string = 'all';  // Valor por defecto, puedes ajustarlo según la lógica de tu aplicación

  onDaySelected(event: any): void {
    this.selectedDay = event.value;  // Extrae el valor seleccionado del evento
  }
}