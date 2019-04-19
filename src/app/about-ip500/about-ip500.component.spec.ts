import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIP500Component } from './about-ip500.component';

describe('AboutIP500Component', () => {
  let component: AboutIP500Component;
  let fixture: ComponentFixture<AboutIP500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutIP500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIP500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
