import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMiembrosComponent } from './perfil-miembros.component';

describe('PerfilMiembrosComponent', () => {
  let component: PerfilMiembrosComponent;
  let fixture: ComponentFixture<PerfilMiembrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilMiembrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
