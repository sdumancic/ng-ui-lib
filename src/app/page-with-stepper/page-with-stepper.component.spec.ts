import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithStepperComponent } from './page-with-stepper.component';

describe('PageWithStepperComponent', () => {
  let component: PageWithStepperComponent;
  let fixture: ComponentFixture<PageWithStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWithStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWithStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
