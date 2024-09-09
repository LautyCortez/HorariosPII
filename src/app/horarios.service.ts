// horarios.service.ts
import { Injectable } from '@angular/core';
import { Horario } from '../horario.model';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private horariosMaterias: Horario[] = [
    { hora: '8:00 AM', lunes: 'PP 2', martes: '', miercoles: '', jueves: 'Programación 2', viernes: 'Programación 2' },
    // Agrega más horarios aquí
  ];

  obtenerHorarios(): Horario[] {
    return this.horariosMaterias;
  }

  agregarHorario(horario: Horario): number {
    if (horario) {
      this.horariosMaterias.push(horario);
      return 1; // Éxito
    }
    return -1; // Error
  }
}
