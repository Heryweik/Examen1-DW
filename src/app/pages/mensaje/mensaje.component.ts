import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

interface Mensaje {
  idConversacion: number;
  emisor: number;
  receptor: number;
  mensaje: string;
  hora: string;
}

@Component({
  selector: ' app-mensaje ',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent implements OnChanges{
  /* mensajeTexto: string = ''; */
  @Input() idConver!: number ;

  mensajeTexto: Mensaje = {
    idConversacion: 0,
    emisor: 1,
    receptor: 0,
    mensaje: "",
    hora: "",
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    // Si el valor de idConver cambia, actualiza el valor de idConversacion en mensajeTexto
    if ('idConver' in changes) {
      this.mensajeTexto.idConversacion = this.idConver;
    }
  }
  /* enviarMensaje() {
    
    const esGrupo = true; 

    const mensaje: any = {
      mensaje: this.mensajeTexto
    };

    if (esGrupo) {
      mensaje.idConversacion = 1; 
    } else {
      mensaje.idConversacion = 1; 
    }

    // Realiza la solicitud POST al endpoint 
    fetch('http://localhost:3000/mensajes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mensaje)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Mensaje enviado:', data);
      
    })
    .catch(error => {
      console.error('Error al enviar el mensaje:', error);
      
    });

    this.mensajeTexto = '';
  } */

  async enviarMensaje() {

    console.log('id conversacion', this.mensajeTexto)

    let respuesta = await fetch('http://localhost:3000/mensajes', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.mensajeTexto)
    });

    let respuestaJson = await respuesta.json();
    console.log("Mensaje enviado", respuestaJson);

    // Limpia el input después de enviar el mensaje.
    this.mensajeTexto.mensaje = "";

    // Recarga la página después de enviar el mensaje.
    location.reload();
  }
}
