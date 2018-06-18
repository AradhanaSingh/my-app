import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  template: `
  <div><h1> {{title}}</h1>
       <pm-products></pm-products>
  </div>
  `

})
export class AppComponent {
  title = 'Product Management Portal';
}
