import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { CarritoComprasService } from '../carrito-compras.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  constructor(private router: Router, private carritoService: CarritoComprasService) {}

  static cedula = '1001200938';
  static contraseña = '12345';

  Nombre = 'Nicolas';

  static isLoggedIn = false;
  static menuOpen = false;

  carritoOpen = false;

  navigateToHome() {
    this.router.navigate(['/']);
  }

  toggleMenu() {
    HeaderComponent.menuOpen = !HeaderComponent.menuOpen;
  }

  mostrarCarrito() {
    this.carritoOpen = !this.carritoOpen;
    // No necesitas acceder a carritoProductos directamente
    // Puedes usar métodos del servicio CarritoComprasService para obtener información sobre el carrito
    // Por ejemplo:
    // const productosEnCarrito = this.carritoService.obtenerProductosEnCarrito();
    // console.log('Productos en el carrito:', productosEnCarrito);
  }

  get isLoggedIn() {
    return HeaderComponent.isLoggedIn;
  }

  get menuOpen() {
    return HeaderComponent.menuOpen;
  }
  
  ngAfterViewInit() {
    console.log('ProductosComponent inicializado');
  }

  ngOnInit() {
    // Verificar el estado de la sesión en el localStorage cuando se carga la página
    if (typeof localStorage !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        HeaderComponent.isLoggedIn = true;
        HeaderComponent.menuOpen = true;
      }
    }
  }
}
