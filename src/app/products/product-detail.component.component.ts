import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IProduct} from './product';
@Component({
  templateUrl: './product-detail.component.component.html',
  styleUrls: ['./product-detail.component.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
  }

}
