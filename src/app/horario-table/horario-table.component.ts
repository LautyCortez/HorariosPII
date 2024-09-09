import { Component,OnInit } from '@angular/core';
import { Horario } from '../../horario.model';
import { HorariosService } from '../horarios.service';


@Component({
  selector: 'app-horario-table',
  templateUrl: './horario-table.component.html',
  styleUrls: ['./horario-table.component.css']
})
export class HorarioTableComponent implements OnInit {
  displayedColumns: string[] = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
  horarios: Horario[] = [];

  constructor(private horariosService: HorariosService) {}

  ngOnInit(): void {
    this.horarios = this.horariosService.obtenerHorarios();
  }
}
