import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertarDepartamento } from './insertar-departamento';

describe('InsertarDepartamento', () => {
  let component: InsertarDepartamento;
  let fixture: ComponentFixture<InsertarDepartamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertarDepartamento],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertarDepartamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
