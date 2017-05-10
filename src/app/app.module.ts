import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {Productos} from './providers/productos';
import { DetallesComponent } from './detalles/detalles.component';

const ROUTES = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'detalles',
    component: DetallesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Productos],
  bootstrap: [AppComponent]
})
export class AppModule {
}
