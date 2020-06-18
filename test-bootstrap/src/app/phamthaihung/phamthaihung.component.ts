import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phamthaihung',
  templateUrl: './phamthaihung.component.html',
  styleUrls: ['./phamthaihung.component.css']
})
export class PhamthaihungComponent implements OnInit {
  imgUrl = 'https://nhandaovadoisong.com.vn/wp-content/uploads/2019/05/hinh-anh-dep-16-1200x800.jpg';
  forgot = false;

  toggleForgot() {
    this.forgot = !this.forgot;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
