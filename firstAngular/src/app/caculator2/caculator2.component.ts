import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator2',
  templateUrl: './caculator2.component.html',
  styleUrls: ['./caculator2.component.css']
})
export class Caculator2Component implements OnInit {
  number1: number;
  number2: number;
  output: number;
  operator: string;

  onChangeNum1(value: number) {
    this.number1 = value;
  }

  onChangeNum2(value: number) {
    this.number2 = value;
  }

  onChangeOperator(value: string) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.number1 + this.number2;
        break;
      case '-':
        this.output = this.number1 - this.number2;
        break;
      case '*':
        this.output = this.number1 * this.number2;
        break;
      case '/':
        this.output = this.number1 / this.number2;
        break;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
