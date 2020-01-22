import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  public titulo = 'CRUD de lembretes com Angular';
  @ViewChild(ErrorMsgComponent, {static: false}) errorMsgComponent: ErrorMsgComponent;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.errorMsgComponent.setError('Esta é uma mensagem de erro.');
  }
}
