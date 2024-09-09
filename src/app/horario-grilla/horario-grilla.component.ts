import { Component } from '@angular/core';
import { DIAS_SEMANA, HORAS } from '../../horario.model';

@Component({
  selector: 'app-horario-grilla',
  templateUrl: './horario-grilla.component.html',
  styleUrls: ['./horario-grilla.component.css']
})
export class HorarioGrillaComponent {
  dias = DIAS_SEMANA;
  horas = HORAS;
}
