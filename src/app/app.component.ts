import { Component } from '@angular/core';
import { ProductService } from '/Users/aru/code/my-app/src/app/products/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <nav class='navbar navbar-default'>
        <div class='container-fluid'>
          <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-nav'>
            <li> <a [routerLink]="['/products']"> Home </a></li>
            <li> <a [routerLink]="['/products']"> Product List </a></li>
          </ul>
        </div>
      </nav>
      <div class='container'>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  // whenever a router is activated, the associated component's view displays here
  providers: [ ProductService ]

})
export class AppComponent {
  title = 'Product Management Portal';
}
