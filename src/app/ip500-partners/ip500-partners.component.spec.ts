import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ip500PartnersComponent } from './ip500-partners.component';

describe('Ip500PartnersComponent', () => {
  let component: Ip500PartnersComponent;
  let fixture: ComponentFixture<Ip500PartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ip500PartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ip500PartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
