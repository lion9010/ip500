import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt150Component } from './gt150.component';

describe('Gt150Component', () => {
  let component: Gt150Component;
  let fixture: ComponentFixture<Gt150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gt150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
