import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../model/product.model';
import { ScheduleVariationModel } from '../model/schedule-variation.model';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  private productBaseRoute = environment.serverUrl + '/api/product';

  getAllProducts() {
    return this.http.get(this.productBaseRoute);
  }

  getRentalProducts(startDate: Date, endDate: Date) {
    return this.http.get(this.productBaseRoute + '/rental?startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString());
  }

  getProductTypes() {
    return this.http.get(this.productBaseRoute + '/producttype');
  }

  addProduct(product: ProductModel) {
    return this.http.post<boolean>(this.productBaseRoute, product);
  }

  editProduct(product: ProductModel) {
    return this.http.put<boolean>(this.productBaseRoute, product)
  }

  getScheduleVariations(productId: number) {
    return this.http.get(this.productBaseRoute + '/ScheduledVariation/' + productId);
  }

  addScheduleVariations(variation: ScheduleVariationModel[]) {
    return this.http.post<boolean>(this.productBaseRoute + '/ScheduledVariation', variation);
  }
}
