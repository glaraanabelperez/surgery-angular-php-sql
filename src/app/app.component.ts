import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  title = 'mi-tienda';
  updates: any[];


  constructor(){ 
  }

  ngOnInit(): void {}

}
