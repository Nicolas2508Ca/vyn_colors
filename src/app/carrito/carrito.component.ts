import { Component, OnInit} from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productosCarrito: any[] = [];

  constructor(private carritoService: CarritoComprasService) { }

  ngOnInit(): void {
    this.productosCarrito = this.carritoService.obtenerProductos();
  }

  eliminarProducto(producto: any) {
    // Eliminar el producto del carrito utilizando el servicio
    this.carritoService.eliminarProducto(producto);
    // Actualizar la lista de productos en el carrito
    this.productosCarrito = this.carritoService.obtenerProductos();
  }

  vaciarCarrito() {
    // Vaciar el carrito utilizando el servicio
    this.carritoService.vaciarCarrito();
    // Actualizar la lista de productos en el carrito
    this.productosCarrito = this.carritoService.obtenerProductos();
  }

}