import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
  usuario: string;
  contrasena: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
usuario: Usuario = {
  usuario: "",
  contrasena: "",
}

constructor(private router: Router) {}

async loginUsuario() {
  try {
    let respuesta = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.usuario)
    });

    if (respuesta.ok) {
      let respuestaJson = await respuesta.json();
      console.log('Usuario Logueado', respuestaJson);

      if (respuestaJson.exito) {
        // Usuario autenticado correctamente
        localStorage.setItem('usuarioAutenticado', JSON.stringify(respuestaJson.usuario));
        /* varible para obtener el id e ir a sus chats */
        const userId = respuestaJson.usuario.id;

        this.router.navigate(['/chats/'+ userId]);
      } else {
        console.log('Error');
      }
    } else {
      console.log('Usuario no autorizado');
    }
  } catch (error) {
    console.error('Error en la solicitud de inicio de sesión:', error);
  }
}
}
