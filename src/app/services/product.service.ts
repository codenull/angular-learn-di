import { Injectable } from '@angular/core';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string
  ) {}
}

@Injectable()
export class ProductService {
  constructor() {}

  getProduct(): Product {
    return new Product(
      0,
      'IPhone 7',
      249.99,
      'The latest iPhone, 7-inch screen.'
    );
  }
}
