import { Injectable } from '@angular/core';
import { ProductosComponent } from './productos/productos.component';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  private productos: any[] = [];

  constructor() { }

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }

  obtenerProductos() {
    return this.productos;
  }

  vaciarCarrito() {
    this.productos = [];
  }
}
