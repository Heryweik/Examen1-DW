import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit{
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
