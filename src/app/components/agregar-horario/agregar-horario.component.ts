import { Component } from '@angular/core';
import { HorarioService, Horario } from '../../horarios.service';

@Component({
  selector: 'app-agregar-horario',
  templateUrl: './agregar-horario.component.html',
  styleUrls: ['./agregar-horario.component.css']
})
export class AgregarHorarioComponent {
  nuevoHorario: Horario = {
    hora: '',
    lunes: '',
    martes: '',
    miercoles: '',
    jueves: '',
    viernes: ''
  };

  constructor(private horarioService: HorarioService) {}

  onSubmit() {
    const resultado = this.horarioService.agregarHorario(this.nuevoHorario);
    if (resultado === 1) {
      alert('Horario agregado exitosamente');
      this.borrarCampos();
    } else {
      alert('Error al agregar el horario');
    }
  }

  borrarCampos() {
    this.nuevoHorario = {
      hora: '',
      lunes: '',
      martes: '',
      miercoles: '',
      jueves: '',
      viernes: ''
    };
  }
}
