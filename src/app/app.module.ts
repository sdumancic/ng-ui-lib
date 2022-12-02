import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { StepperSidebarComponent } from './ui/stepper-sidebar/stepper-sidebar.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { UiSectionComponent } from './ui/section/ui-section/ui-section.component';
import { UiSectionGroupComponent } from './ui/section/ui-section-group/ui-section-group.component';
import { PageWithStepperComponent } from './page-with-stepper/page-with-stepper.component';
import { NavigatorComponent } from './ui/sidenav/navigator.component';
import { NavigatorItemComponent } from './ui/sidenav/navigator-item/navigator-item.component';

const material = [
  MatTabsModule,
  CdkStepperModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
];
@NgModule({
  declarations: [
    AppComponent,
    StepperSidebarComponent,
    SidebarComponent,
    UiSectionComponent,
    UiSectionGroupComponent,
    PageWithStepperComponent,
    NavigatorComponent,
    NavigatorItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...material,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
