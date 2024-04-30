import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  producto = [
    { src: '../../../assets/Producto1.png', alt: 'Producto1' ,titulo: 'Producto 1', descripcion: 'Descripcion del producto 1' },
    { src: '../../../assets/Producto2.png', alt: 'Producto2', titulo: 'Producto 2', descripcion: 'Descripcion del producto 2' },
    { src: '../../../assets/Producto3.png', alt: 'Producto3', titulo: 'Producto 3', descripcion: 'Descripcion del producto 3' },
  ];
}
