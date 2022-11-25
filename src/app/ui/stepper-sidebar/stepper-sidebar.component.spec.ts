import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperSidebarComponent } from './stepper-sidebar.component';

describe('StepperSidebarComponent', () => {
  let component: StepperSidebarComponent;
  let fixture: ComponentFixture<StepperSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
