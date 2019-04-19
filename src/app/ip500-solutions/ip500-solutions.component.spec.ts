import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ip500SolutionsComponent } from './ip500-solutions.component';

describe('Ip500SolutionsComponent', () => {
  let component: Ip500SolutionsComponent;
  let fixture: ComponentFixture<Ip500SolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ip500SolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ip500SolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
