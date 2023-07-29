import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ConversacionesG } from 'src/app/models/usuarios.model';

interface Mensaje {
  emisor: {};
  hora: string;
  mensaje: string;
  receptor: number;
}

@Component({
  selector: 'app-chat-grupal',
  templateUrl: './chat-grupal.component.html',
  styleUrls: ['./chat-grupal.component.scss']
})
export class ChatGrupalComponent {
  userId!: number;
  conversacion: Array<ConversacionesG> = new Array();
  nombreDestinatario!: string;
  idGrupo!: string;
  idGru!: number;
  id!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nombreDestinatario = params.get('nombreDestinatario') ?? '';
      console.log('Nombre', this.nombreDestinatario); // Aquí puedes utilizar el valor en el componente
      this.idGrupo = params.get('idGrupo') ?? '';
      console.log('id del grupo', this.idGrupo);
    });

    const usuarioAutenticado = JSON.parse(localStorage.getItem('usuarioAutenticado') ?? 'null');
    this.userId = usuarioAutenticado.id;
    console.log('id del usuario: ', this.userId);

    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerDetalleConversacionGrupal();
    this.idGru = Number(this.idGrupo);

    console.log('id del grupo que se envia por el @input: ', this.idGru);
  }

  async obtenerDetalleConversacionGrupal() {
    try {
      const respuesta = await fetch(`http://localhost:3000/grupos/${this.idGrupo}/mensajes`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      });

      if (respuesta.ok) {
        this.conversacion = await respuesta.json();
        console.log('Conversacion', this.conversacion);
      } else {
        console.log('Error al obtener la conversación');
      }
    } catch (error) {
      console.error('Error en la solicitud de obtener la conversación:', error);
    }
  }

}
