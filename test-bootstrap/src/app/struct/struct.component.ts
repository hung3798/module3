import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {
  isShow: boolean;
  arrSubject = ['Angular', 'java', 'javascript', 'Angular'];

  changeIsShow() {
    this.isShow = !this.isShow;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
