import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario: Usuario = {
    nombre: "",
    apellido: "",
    correo: "",
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }];

  sexos: string[] = ["Hombre", "Mujer"];

  constructor() { }

  guardar(forma: NgForm) {
    //console.log("Formulario posteado");
    console.log("ngForm: ", forma);

    console.log("Valor forma: ", forma.value);
    console.log("Usuario", this.usuario);
  }
}

export interface Usuario {
  nombre: string,
  apellido: string,
  correo: string,
  pais: string,
  sexo: string,
  acepta: boolean
}
