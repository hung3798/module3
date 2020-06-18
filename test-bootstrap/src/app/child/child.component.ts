import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() myClick = new EventEmitter<boolean>();
  @Output() myClick1 = new EventEmitter<string>();

  addForParent() {
    this.myClick.emit(true);
  }

  subForParent() {
    this.myClick.emit(false);
  }

  add1ForParent() {
    this.myClick1.emit('+');
  }

  sub1ForParent() {
    this.myClick1.emit('-');
  }

  double1ForParent() {
    this.myClick1.emit('*');
  }

  cen1ForParent() {
    this.myClick1.emit('/');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
