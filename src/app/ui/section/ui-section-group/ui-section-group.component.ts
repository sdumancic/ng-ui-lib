import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'ui-section-group',
  templateUrl: './ui-section-group.component.html',
  styleUrls: ['./ui-section-group.component.scss']
})
export class UiSectionGroupComponent implements OnInit {
@Input() title: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
