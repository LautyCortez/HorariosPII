import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorFechasComponent } from './convertidor-fechas.component';

describe('ConvertidorFechasComponent', () => {
  let component: ConvertidorFechasComponent;
  let fixture: ComponentFixture<ConvertidorFechasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertidorFechasComponent]
    });
    fixture = TestBed.createComponent(ConvertidorFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
