import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioGrillaComponent } from './horario-grilla.component';

describe('HorarioGrillaComponent', () => {
  let component: HorarioGrillaComponent;
  let fixture: ComponentFixture<HorarioGrillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorarioGrillaComponent]
    });
    fixture = TestBed.createComponent(HorarioGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
