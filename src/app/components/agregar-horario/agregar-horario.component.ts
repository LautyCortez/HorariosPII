import { Component, OnInit } from '@angular/core';
import { HorarioService, Horario } from '../../horarios.service';

@Component({
  selector: 'app-agregar-horario',
  templateUrl: './agregar-horario.component.html',
  styleUrls: ['./agregar-horario.component.css']
})
export class AgregarHorarioComponent implements OnInit {
  nuevoHorario: Horario = {
    hora: '',
    lunes: '',
    martes: '',
    miercoles: '',
    jueves: '',
    viernes: ''
  };
  horarioSeleccionado: string = '';  // Para seleccionar un horario a eliminar
  horarios: Horario[] = [];  // Lista de horarios existentes
  mensajeEliminacion: string = '';  // Mensaje de éxito o error al eliminar

  constructor(private horarioService: HorarioService) {}
  ngOnInit(): void {
    this.cargarHorarios();
  }

  // Método para agregar un nuevo horario
  onSubmit() {
    const resultado = this.horarioService.agregarHorario(this.nuevoHorario);
    if (resultado === 1) {
      alert('Horario agregado exitosamente');
      this.cargarHorarios();  // Actualizar la lista de horarios
      this.borrarCampos();
    } else {
      alert('Error al agregar el horario');
    }
  }

  // Método para borrar los campos del formulario
  borrarCampos() {
    this.nuevoHorario = { hora: '', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '' };
  }

  // Cargar todos los horarios existentes
  cargarHorarios(): void {
    this.horarioService.getHorarios().subscribe(data => {
      this.horarios = data;
    });
  }

  // Método para eliminar un horario
  eliminarHorario() {
    const resultado = this.horarioService.eliminarHorario(this.horarioSeleccionado);
    if (resultado === 1) {
      this.mensajeEliminacion = 'Horario eliminado exitosamente.';
      this.cargarHorarios();  // Actualiza la lista de horarios después de eliminar
      this.horarioSeleccionado = '';  // Reinicia la selección
    } else {
      this.mensajeEliminacion = 'Error al eliminar el horario.';
    }
  }
}