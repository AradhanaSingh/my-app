import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    // need to tell angular about the new pipe, we do this by declaring the pipe in an Angular Module
    // Our Product list component wants to use the ConvertToSpaces pipe. So we open the ANgular module that declares the product-list component
    // which on our example is AppModule
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    // ngModel is found in FormsModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
