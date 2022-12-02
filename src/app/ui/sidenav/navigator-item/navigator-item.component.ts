import { Component, OnInit,Input } from '@angular/core';
import { MenuItem, SubmenuItem } from '../navigator.model';


@Component({
  selector: 'app-navigator-item',
  templateUrl: './navigator-item.component.html',
  styleUrls: ['./navigator-item.component.scss']
})
export class NavigatorItemComponent implements OnInit {

  @Input() isMenuItemOpened: boolean = false;
  @Input() item: MenuItem| undefined;
 
  constructor() { }

  ngOnInit(): void {
  }

}
