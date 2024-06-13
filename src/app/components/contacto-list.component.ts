import { ContactoService } from '../contacto.service';
import { Contacto } from './../contacto.model';
// contacto-list.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html'
})
export class ContactoListComponent implements OnInit {
  contactos!: Contacto[];

  constructor(private contactoService: ContactoService) { }

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
