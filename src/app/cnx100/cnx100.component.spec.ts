import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cnx100Component } from './cnx100.component';

describe('Cnx100Component', () => {
  let component: Cnx100Component;
  let fixture: ComponentFixture<Cnx100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cnx100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cnx100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
