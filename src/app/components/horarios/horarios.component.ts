import { Component } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  selectedDay: string = 'all';

  onDaySelected(event: any): void {
    this.selectedDay = event.value;
  }
}