import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {

  book = {
    title: "Effective-Java",
    rating: 4.9872,
    pages: 1456,
    price: 15.87,
    releaseDate: new Date(2010, 2, 4),
    preface: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus non ipsum non consectetur. Cras vitae velit iaculis, scelerisque dolor et, vehicula libero. Praesent mattis orci dui, non gravida erat vehicula sit amet. Maecenas dui turpis, auctor id lorem id, auctor commodo massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ac nibh at libero luctus malesuada. Pellentesque sagittis dignissim magna et hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nec posuere tellus. Integer in turpis felis. Aliquam ut libero fermentum, porttitor sapien nec, vulputate ex. Suspendisse posuere imperdiet tristique.'

  }
  constructor() { }

  ngOnInit(): void {
  }

}
