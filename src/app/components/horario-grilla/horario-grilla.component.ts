import { Component, OnInit } from '@angular/core';
import { HorarioService, Horario } from '../../horarios.service';

@Component({
  selector: 'app-horario-grilla',
  templateUrl: './horario-grilla.component.html',
  styleUrls: ['./horario-grilla.component.css']
})
export class HorarioGrillaComponent implements OnInit {
  selectedDay: string = 'todos';  
  horarios: Horario[] = [];
  displayedColumns: string[] = ['hora'];  

  constructor(private horarioService: HorarioService) {}

  ngOnInit(): void {
    this.cargarHorarios();
  }

  onDaySelected(dia: string): void {
    this.selectedDay = dia;
    this.cargarHorarios();
  }

  cargarHorarios(): void {
    this.horarioService.getHorariosPorDia(this.selectedDay).subscribe((data) => {
      this.horarios = data;
      this.updateDisplayedColumns();
    });
  }

  updateDisplayedColumns(): void {
    if (this.selectedDay === 'todos') {
      this.displayedColumns = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes']; 
    } else {
      this.displayedColumns = ['hora', this.selectedDay]; 
    }
  }
}
