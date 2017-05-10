/**
 * Created by Aula08-17 on 09/05/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Productos {

  server = 'http://localhost:8080';
  productoDetalles;
  carrito = [];

  constructor(public http: Http) {
  }

  setProductoDetalles(productoDetalles) {
    this.productoDetalles = productoDetalles;
  }

  insertarProductoCarrito(producto) {
    let found = false;
    for (let i = 0; i < this.carrito.length; i++) {
      if (producto._id === this.carrito[i]._id) {
        found = true;
        this.carrito[i].unidades++;
      }
    }
    if (!found) {
      producto.unidades = 1;
      this.carrito.push(producto);
    }
    console.log(this.carrito);
  }

  eliminaProductoCarrito(producto) {
    for (let i = 0; i < this.carrito.length; i++) {
      if (producto._id === this.carrito[i]._id) {
        this.carrito.splice(i, 1);
      }
    }
  }

  calcularCompradoTotal() {
    let total = 0;
    for (let i = 0; i < this.carrito.length; i++) {
      total += this.carrito[i].precio * this.carrito[i].unidades;
    }
    return total;
  }

  anadirComprado(producto) {
    producto.unidades++;
  }

  quitarComprado(producto) {
    producto.unidades--;
    if (producto.unidades === 0) {
      this.eliminaProductoCarrito(producto);
    }
  }

  read() {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(this.server + '/api/productos/read', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  findOne(_id) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(this.server + '/api/producto/' + _id, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
