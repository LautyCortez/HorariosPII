// horario-table.component.ts
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Horario } from '../horario.model';
import { HorariosService } from '../horarios.service';

@Component({
  selector: 'app-horario-table',
  templateUrl: './horario-table.component.html',
  styleUrls: ['./horario-table.component.css']
})
export class HorarioTableComponent implements OnInit, OnChanges {
  @Input() selectedDay: string = 'all';
  
  displayedColumns: string[] = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];  // Añade esta línea
  horarios: Horario[] = [];
  filteredHorarios: Horario[] = [];

  constructor(private horariosService: HorariosService) {}

  ngOnInit(): void {
    this.horarios = this.horariosService.obtenerHorarios();
    this.filterHorarios();
  }

  ngOnChanges(): void {
    this.filterHorarios();
  }

  filterHorarios(): void {
    if (this.selectedDay === 'all') {
      this.filteredHorarios = this.horarios;
    } else {
      this.filteredHorarios = this.horarios.filter(horario => horario[this.selectedDay as keyof Horario]);  // Corrige el tipo aquí
    }
  }
}
