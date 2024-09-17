import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Horario {
  hora: string;
  lunes?: string;
  martes?: string;
  miercoles?: string;
  jueves?: string;
  viernes?: string;
}

@Injectable({
  providedIn: 'root',
})
export class HorarioService {
  private horarios: Horario[] = [
    { hora: '8:00 AM', lunes: 'Practicas Profecionalizantes', martes: 'Derecho y Legislacion Laboral', miercoles: 'Base de Datos', jueves: 'Practicas Profecionalizantes', viernes: '' },
    { hora: '8:40 AM', lunes: 'Practicas Profecionalizantes', martes: 'Derecho y Legislacion Laboral', miercoles: 'Base de Datos', jueves: 'Practicas Profecionalizantes', viernes: 'Gestion de Proyectos' },
    { hora: '9:20 AM', lunes: 'Practicas Profecionalizantes', martes: 'Derecho y Legislacion Laboral', miercoles: 'Base de Datos', jueves: 'Practicas Profecionalizantes', viernes: 'Gestion de Proyectos' },
    { hora: '10:00 AM', lunes: 'Redes y Comunicacion', martes: 'Programacion II', miercoles: '', jueves: 'Programacion II', viernes: 'Gestion de Proyectos' },
    { hora: '10:40 AM', lunes: 'Redes y Comunicacion', martes: 'Programacion II', miercoles: '', jueves: 'Programacion II', viernes: 'Gestion de Proyectos' },
    { hora: '11:20 AM', lunes: 'Redes y Comunicacion', martes: 'Programacion II', miercoles: '', jueves: 'Programacion II', viernes: '' },
    { hora: '12:00 PM', lunes: 'Redes y Comunicacion', martes: 'Programacion II', miercoles: '', jueves: 'Programacion II', viernes: '' }
  ];

  getHorarios(): Observable<Horario[]> {
    return of(this.horarios);
  }

  getHorariosPorDia(dia: string): Observable<Horario[]> {
    if (dia === 'todos') {
      return of(this.horarios);
    }
    return of(this.horarios.map(horario => ({ hora: horario.hora, [dia]: horario[dia as keyof Horario] })));
  }

  agregarHorario(horario: Horario): number {
    if (horario) {
      this.horarios.push(horario);
      return 1;
    }
    return -1;
  }

  eliminarHorario(hora: string): number {
    const index = this.horarios.findIndex(h => h.hora === hora);
    if (index !== -1) {
      this.horarios.splice(index, 1);
      return 1;
    }
    return -1;
  }
}