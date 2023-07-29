import { Component } from '@angular/core';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent {
  userId!: string;
  nombre!: string;
  imagen!: string

  ngOnInit() {
    const usuarioAutenticado = JSON.parse(localStorage.getItem('usuarioAutenticado') ?? 'null');
    this.userId = usuarioAutenticado.id;
    this.nombre = usuarioAutenticado.nombre;
    this.imagen = usuarioAutenticado.imagen;
    console.log('id del usuario: ', this.userId)
  }
}
