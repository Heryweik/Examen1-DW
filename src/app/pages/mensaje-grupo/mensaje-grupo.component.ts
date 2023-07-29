import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

interface Mensaje {
  idGrupo: number;
  emisor: number;
  receptor: number;
  mensaje: string;
  hora: string;
}

@Component({
  selector: 'app-mensaje-grupo',
  templateUrl: './mensaje-grupo.component.html',
  styleUrls: ['./mensaje-grupo.component.scss']
})
export class MensajeGrupoComponent implements OnChanges{
    /* mensajeTexto: string = ''; */
    @Input() idConver!: number ;
  
    mensajeTexto: Mensaje = {
      idGrupo: 0,
      emisor: 1,
      receptor: 0,
      mensaje: "",
      hora: "",
    }
  
    constructor() {}
  
    ngOnChanges(changes: SimpleChanges) {
      // Si el valor de idConver cambia, actualiza el valor de idGrupo en mensajeTexto
      if ('idConver' in changes) {
        this.mensajeTexto.idGrupo = this.idConver;
      }
    }
  
    async enviarMensaje() {
  
      console.log('id grupo', this.mensajeTexto)
  
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
  
