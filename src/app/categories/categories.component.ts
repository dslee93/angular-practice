import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(service: CategoryService) {
    this.categories = service.getCategories();
    this.title = service.getTitle();
   }

  ngOnInit(): void {
  }
  comments = 'Enter your comments';
  title;
  categories;
  imageUrl = "https://placeimg.com/640/480/tech";
  isActive = "true";

  getTitle() {
    return this.title;
  }

  onSubmit($event) {
    console.log("yup");
  }
  search(search1) {
    console.log(search1);
  }
  onKeyUp() {
    console.log(this.comments);
  }
}
