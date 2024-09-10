import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioTableComponent } from './horario-table.component';

describe('HorarioTableComponent', () => {
  let component: HorarioTableComponent;
  let fixture: ComponentFixture<HorarioTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorarioTableComponent]
    });
    fixture = TestBed.createComponent(HorarioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
