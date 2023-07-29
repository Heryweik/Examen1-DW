import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Conversaciones } from 'src/app/models/usuarios.model';

@Component({
  selector: 'app-chat-individual',
  templateUrl: './chat-individual.component.html',
  styleUrls: ['./chat-individual.component.scss']
})

export class ChatIndividualComponent {
  userId!: number;
  nombreDestinatario!: string;
  id!: string | null ;
  idConversacion!: number;
  conversacion: Array<Conversaciones> = new Array();;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nombreDestinatario = params.get('nombreDestinatario') ?? '';
      console.log('Nombre', this.nombreDestinatario); // Aquí puedes utilizar el valor en el componente
    });

    const usuarioAutenticadoString = localStorage.getItem('usuarioAutenticado') ?? 'null';
    const usuarioAutenticado = JSON.parse(usuarioAutenticadoString);
    this.userId = usuarioAutenticado.id;
    console.log('id del usuario: ', this.userId);

    
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerDetalleConversacionIndividual();
    this.idConversacion = Number(this.id);

    console.log('id de la conversacion: ', this.idConversacion);
  }

  async obtenerDetalleConversacionIndividual() {
    try {
      let respuesta = await fetch(`http://localhost:3000/conversaciones/${this.id}/mensajes`, {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      });
      if (respuesta.ok) {
        this.conversacion = await respuesta.json();
        console.log("Conversacion", this.conversacion);
      } else {
        console.log("Error al obtener la conversación");
      }
    } catch (error) {
      console.error("Error en la solicitud de obtener la conversación:", error);
    }
  }


}

