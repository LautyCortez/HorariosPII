// src/app/horario-grilla/horario-grilla.component.ts
import { Component, OnInit } from '@angular/core';
import { HorarioService, Horario } from '../../horarios.service';

@Component({
  selector: 'app-horario-grilla',
  templateUrl: './horario-grilla.component.html',
  styleUrls: ['./horario-grilla.component.css']
})
export class HorarioGrillaComponent implements OnInit {
  selectedDay: string = 'todos';  // Mostrar todos los días por defecto
  horarios: Horario[] = [];
  displayedColumns: string[] = ['hora'];  // Siempre muestra la columna de 'hora'

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
      this.displayedColumns = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];  // Muestra todas las columnas
    } else {
      this.displayedColumns = ['hora', this.selectedDay];  // Muestra solo la columna del día seleccionado
    }
  }
}
