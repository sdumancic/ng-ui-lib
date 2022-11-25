import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-section',
  templateUrl: './ui-section.component.html',
  styleUrls: ['./ui-section.component.scss']
})
export class UiSectionComponent implements OnInit {

  @Input() icon: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
