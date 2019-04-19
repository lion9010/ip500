import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cnx200Component } from './cnx200.component';

describe('Cnx200Component', () => {
  let component: Cnx200Component;
  let fixture: ComponentFixture<Cnx200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cnx200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cnx200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
