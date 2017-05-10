import {Component, OnInit} from '@angular/core';
import {Productos} from '../providers/productos';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  productos;

  constructor(public productosService: Productos, public router: Router) {
  }

  ngOnInit() {
    this.productosService.read().then(data => {
      console.log(this.productosService.carrito);
      this.productos = data;
    });
  }

  verProducto(_id) {
    this.productosService.findOne(_id).then(data => {
      console.log(data);
      this.productosService.setProductoDetalles(data);
      this.router.navigate(['detalles']);
    });
  }

  comprar(producto) {
    this.productosService.insertarProductoCarrito(producto);
  }

  eliminar(producto) {
    this.productosService.eliminaProductoCarrito(producto);
  }

  anadir(producto) {
    this.productosService.anadirComprado(producto);
  }

  quitar(producto) {
    this.productosService.quitarComprado(producto);
  }

}
