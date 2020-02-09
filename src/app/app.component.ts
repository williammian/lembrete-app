import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo = 'CRUD de lembretes com Angular';
  env = environment;
  imagem: string;

  constructor() {
    this.imagem = environment.imagensSrc + 'calendar1.png'
  }
}
