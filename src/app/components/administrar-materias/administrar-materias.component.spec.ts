import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarMateriasComponent } from './administrar-materias.component';

describe('AdministrarMateriasComponent', () => {
  let component: AdministrarMateriasComponent;
  let fixture: ComponentFixture<AdministrarMateriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrarMateriasComponent]
    });
    fixture = TestBed.createComponent(AdministrarMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
