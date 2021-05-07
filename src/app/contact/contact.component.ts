import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactMethods=[
  {id:1, name:"Email"},
  {id:2, name:"Phone"},
  {id:3, name: "Mail"}
]
  constructor() { }

  ngOnInit(): void {
  }
  showingForm(form) {
    console.log(form);
  }

}
