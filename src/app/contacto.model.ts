// contacto.model.ts
export interface Contacto {
  id?: number;
  nombre: string;
  apellido: string;
  telefono?: string;
  email?: string;
  direccion?: string;
  fecha_nacimiento?: string;
  fecha_creacion?: string;
}
