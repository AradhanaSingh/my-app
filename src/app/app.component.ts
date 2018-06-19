import { Component } from '@angular/core';
import { ProductService } from '/Users/aru/code/my-app/src/app/products/product.service.ts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div><h1> {{title}}</h1>
       <pm-products></pm-products>
  </div>
  `
  //providers: [ProductService]

})
export class AppComponent {
  title = 'Product Management Portal';
}
