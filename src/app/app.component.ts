import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: `
  <div><h1> {{title}}</h1>
       <div> My first component </div>
  </div>
  `

})
export class AppComponent {
  title = 'Product Management Portal';
}
