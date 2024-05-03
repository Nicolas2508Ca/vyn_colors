import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  cedula = '';
  contrasenia = '';

  login() {
    console.log('Cedula:', this.cedula);
    console.log('Contrasenia:', this.contrasenia);
    if (this.cedula == '12345'  && this.contrasenia == '12345' ) {
      HeaderComponent.isLoggedIn = true;
      HeaderComponent.menuOpen = true;
      alert('Bienvenido');
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
