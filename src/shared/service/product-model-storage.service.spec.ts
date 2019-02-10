import { TestBed, inject } from '@angular/core/testing';

import { ProductModelStorageService } from './product-model-storage.service';

describe('ProductModelStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductModelStorageService]
    });
  });

  it('should be created', inject([ProductModelStorageService], (service: ProductModelStorageService) => {
    expect(service).toBeTruthy();
  }));
});
