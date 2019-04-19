import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ip500MembersComponent } from './ip500-members.component';

describe('Ip500MembersComponent', () => {
  let component: Ip500MembersComponent;
  let fixture: ComponentFixture<Ip500MembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ip500MembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ip500MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
