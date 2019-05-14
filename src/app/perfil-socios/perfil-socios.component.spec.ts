import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSociosComponent } from './perfil-socios.component';

describe('PerfilSociosComponent', () => {
  let component: PerfilSociosComponent;
  let fixture: ComponentFixture<PerfilSociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilSociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
