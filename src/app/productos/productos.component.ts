import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarritoComprasService } from '../carrito-compras.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos = [
    { src: '../../../assets/Producto1.png', alt: 'Titulo_producto1' ,titulo: 'Tonico de rosas', descripcion: 'Extracto de rosas y manzanilla en alta concentración, por eso nuestra fórmula se ha posicionado como una de las mejores del mercado, ya que estos dos ingredientes juntos hidratan a profundidad la piel', precio:'10.000$', cantidad: 0},

    { src: '../../../assets/Producto2.png', alt: 'Titulo_producto2', titulo: 'Protector solar', descripcion: 'Lo más importante de este producto es la protección que otorga a tu piel, no solo de rayos solares sino también de luces artificiales.', precio:'12.000$', cantidad: 0},
    { src: '../../../assets/Producto3.png', alt: 'Titulo_producto3', titulo: 'Shampoo para brochas', descripcion: 'Es súper importante utilizar productos especializados para brochas, nuestro shampoo cuida las cerdas y retira todos los excesos de producto que se adhieren por completo.', precio:'15.000$', cantidad: 0},
  ];

  constructor(private carritoService: CarritoComprasService) {}

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    console.log('Producto agregado al carrito:', producto);
    alert('¡Producto agregado al carrito!');
  }


  incrementarCantidad(producto: any) {
    producto.cantidad++;
  }

  decrementarCantidad(producto: any) {
    if (producto.cantidad > 0) {
      producto.cantidad--;
    }
  }
}

