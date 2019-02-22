import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }
  usuario:Object={
    nombre:null,
    apellido:null,
    correo:null
  }
  guardar(forma:NgForm){
    console.log(forma)
    console.log('ngForm',forma)
    console.log('valor',forma.value)
    console.log('usuario',this.usuario)
  }

  ngOnInit() {
  }

}
