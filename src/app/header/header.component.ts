import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  static cedula = '1001200938';
  static contraseña = '12345';

  Nombre = 'Nicolas';

  static isLoggedIn = false;
  static menuOpen = false;

  navigateToHome() {
    this.router.navigate(['/']);
  }

  toggleMenu() {
    HeaderComponent.menuOpen = !HeaderComponent.menuOpen;
  }

  get isLoggedIn() {
    return HeaderComponent.isLoggedIn;
  }

  get menuOpen() {
    return HeaderComponent.menuOpen;
  }

  ngOnInit() {
    // Verificar el estado de la sesión en el localStorage cuando se carga la página
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      HeaderComponent.isLoggedIn = true;
      HeaderComponent.menuOpen = true;
    }
  }
}
