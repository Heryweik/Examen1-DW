import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios.model';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit{
  id!: string | null;
  usuario!: Usuarios;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerDetalleUsuario();
  }

  async obtenerDetalleUsuario() {
    let respuesta = await fetch(`http://localhost:3000/usuarios/${this.id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    });
    this.usuario = await respuesta.json();
    console.log("Usuario", this.usuario);
  }

}
