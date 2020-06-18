import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value = 0;
  value2 = 0;

  changeValue(isAdd: boolean) {
    if (isAdd) {
      this.value = this.value + 1;
    } else {
      this.value = this.value - 1;
    }
  }

  changeValue1(operator: string) {
    switch (operator) {
      case '+':
        this.value = this.value + this.value;
        break;
      case '-':
        this.value = this.value % this.value;
        break;
      case '*':
        this.value = this.value * this.value;
        break;
      case '/':
        this.value = this.value + 34;
        break;
    }
  }

  changeValue2() {
    this.value2 = this.value2 * 3 - 1 / 2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
