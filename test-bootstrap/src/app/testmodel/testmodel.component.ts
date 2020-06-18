import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testmodel',
  templateUrl: './testmodel.component.html',
  styleUrls: ['./testmodel.component.css']
})
export class TestmodelComponent implements OnInit {
  name = '';
  isColor: boolean;

  changeColor(name) {
    name = this.name;
    if (name.length % 2 === 0) {
      this.isColor = false;
    } else {
      this.isColor = true;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
