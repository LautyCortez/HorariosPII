import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioTablaComponent } from './horario-tabla.component';

describe('HorarioTableComponent', () => {
  let component: HorarioTablaComponent;
  let fixture: ComponentFixture<HorarioTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorarioTablaComponent]
    });
    fixture = TestBed.createComponent(HorarioTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
