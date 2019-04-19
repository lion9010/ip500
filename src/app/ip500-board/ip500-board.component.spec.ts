import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ip500BoardComponent } from './ip500-board.component';

describe('Ip500BoardComponent', () => {
  let component: Ip500BoardComponent;
  let fixture: ComponentFixture<Ip500BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ip500BoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ip500BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
