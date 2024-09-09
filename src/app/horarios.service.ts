import { Injectable } from '@angular/core';
import { Horario } from '../horario.model';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private horariosMaterias: Horario[] = [
    // Aquí irían los datos de horarios
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
