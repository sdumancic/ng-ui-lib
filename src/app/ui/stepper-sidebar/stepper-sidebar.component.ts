import { CdkStepper } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-sidebar',
  templateUrl: './stepper-sidebar.component.html',
  styleUrls: ['./stepper-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [{ provide: CdkStepper, useExisting: StepperSidebarComponent }]
})
export class StepperSidebarComponent extends CdkStepper  {

  @Input() title: string | undefined

  selectStepByIndex (index: number): void {
    this.selectedIndex = index
  }


}
