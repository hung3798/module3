import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arrPeople = [
    {name: 'pham thai hung', age: 20},
    {name: 'le ngoc huy', age: 30},
    {name: 'pham hong quan', age: 24},
    {name: 'le thi lieu', age: 11}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removePersonByName(name: string) {
    const index = this.arrPeople.findIndex(e => e.name === name);
    this.arrPeople.splice(index, 1);
  }
}
