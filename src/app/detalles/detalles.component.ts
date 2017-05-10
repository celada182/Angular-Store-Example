import {Component, OnInit} from '@angular/core';
import {Productos} from '../providers/productos';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  producto;

  constructor(public productosService: Productos, public router:Router) {
  }

  ngOnInit() {
    this.producto = this.productosService.productoDetalles;
  }

  comprar(producto) {
    this.productosService.insertarProductoCarrito(producto);
    this.router.navigate(['']);
  }

}
