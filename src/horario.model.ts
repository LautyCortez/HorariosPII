export interface Horario {
    dia: string;
    horas: string[];
    lunes: string;   // La materia o actividad del lunes
    martes: string;  // La materia o actividad del martes
    miercoles: string; // La materia o actividad del miércoles
    jueves: string;  // La materia o actividad del jueves
    viernes: string; // La materia o actividad del viernes
}

export const DIAS_SEMANA: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
export const HORAS: string[] = [
    '8:00 AM', '8:40 AM', '9:20 AM', '10:00 AM', '10:40 AM', '11:20 AM', '12:00 PM'
];