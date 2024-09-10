import { Component } from '@angular/core';

@Component({
  selector: 'app-horario-grilla',
  templateUrl: './horario-grilla.component.html',
  styleUrls: ['./horario-grilla.component.css']
})
export class HorarioGrillaComponent {
  selectedDay: string = 'todos';

  onDaySelected(dia: string): void {
    this.selectedDay = dia;
  }
}
