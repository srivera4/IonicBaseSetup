import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product.model';

@Injectable()
export class ProductModelStorageService {

  public productModelStorage: ProductModel;

  constructor() {
    this.productModelStorage = new ProductModel();
  }

}
