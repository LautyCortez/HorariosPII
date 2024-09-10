import { Component, Input, OnChanges } from '@angular/core';
import { HorarioService, Horario } from '../../horarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-horario-tabla',
  templateUrl: './horario-tabla.component.html',
  styleUrls: ['./horario-tabla.component.css']
})
export class HorarioTablaComponent implements OnChanges {
  @Input() diaSeleccionado: string = 'todos';
  horarios: Horario[] = [];
  displayedColumns: string[] = ['hora', 'materia'];

  constructor(private horarioService: HorarioService) {}

  ngOnChanges(): void {
    this.cargarHorarios();
  }

  cargarHorarios(): void {
    this.horarioService.getHorariosPorDia(this.diaSeleccionado)
      .subscribe((data: Horario[]) => {
        this.horarios = data;
      });
  }
}
