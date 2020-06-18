import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caculator2Component } from './caculator2.component';

describe('Caculator2Component', () => {
  let component: Caculator2Component;
  let fixture: ComponentFixture<Caculator2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caculator2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caculator2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
