import { Component, OnInit } from '@angular/core';
import { Contacto } from './contacto.model';
import { ContactoService } from './contacto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pruebaContacto';
  contactos!: Contacto[];
  nombre:string = '';
  apellido:string = '';




  constructor(private contactoService: ContactoService) { }

  crearContacto() {
    const nuevoContacto: Contacto = {
      nombre: this.nombre,
      apellido: this.apellido,
    };
    this.contactoService.crearContacto(nuevoContacto)
      .subscribe(() => {
        console.log('Contacto creado exitosamente');
       this.cargarContactos();
      });
  }

  ngOnInit() {
    this.cargarContactos();
  }

  cargarContactos() {
    console.log('Cargando contactos.. lo siens.');
    this.contactoService.getContactos()
      .subscribe(contactos => {
        this.contactos = contactos;
        console.log(contactos);
      });
  }
}
