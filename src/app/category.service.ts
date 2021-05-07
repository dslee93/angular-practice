import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getTitle() {
    return "List of Products: ";
  }
  getCategories() {
    return ['Home', 'Electronics', 'Fashion'];
  }
}
