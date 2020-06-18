import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhamthaihungComponent } from './phamthaihung.component';

describe('PhamthaihungComponent', () => {
  let component: PhamthaihungComponent;
  let fixture: ComponentFixture<PhamthaihungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhamthaihungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhamthaihungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
