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
  horarioSeleccionado: string = ''; 
  horarios: Horario[] = [];  
  mensajeEliminacion: string = '';  

  constructor(private horarioService: HorarioService) {}
  ngOnInit(): void {
    this.cargarHorarios();
  }

  onSubmit() {
    const resultado = this.horarioService.agregarHorario(this.nuevoHorario);
    if (resultado === 1) {
      alert('Horario agregado exitosamente');
      this.cargarHorarios();  
      this.borrarCampos();
    } else {
      alert('Error al agregar el horario');
    }
  }

  borrarCampos() {
    this.nuevoHorario = { hora: '', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '' };
  }

  cargarHorarios(): void {
    this.horarioService.getHorarios().subscribe(data => {
      this.horarios = data;
    });
  }

  eliminarHorario() {
    const resultado = this.horarioService.eliminarHorario(this.horarioSeleccionado);
    if (resultado === 1) {
      this.mensajeEliminacion = 'Horario eliminado exitosamente.';
      this.cargarHorarios();  
      this.horarioSeleccionado = ''; 
    } else {
      this.mensajeEliminacion = 'Error al eliminar el horario.';
    }
  }
}