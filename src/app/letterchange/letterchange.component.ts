import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letterchange',
  templateUrl: './letterchange.component.html',
  styleUrls: ['./letterchange.component.css']
})
export class LetterchangeComponent implements OnInit {
  phrase = "";
  temp= "";
  constructor() { }

  ngOnInit(): void {
  }

  changeIt() {
    this.temp = this.phrase;
    return this.temp;
  }
}
