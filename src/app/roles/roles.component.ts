import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  streamName = [
    {id:1, name: "Java"},
    {id:2, name: "Techops"},
    {id:3, name: "Business"}
  ]
  stuff;
  constructor() { }

  ngOnInit(): void {
  }
  showingForm(f) {
    console.log(f);
    this.stuff = f;
    return this.stuff;
  }


}
