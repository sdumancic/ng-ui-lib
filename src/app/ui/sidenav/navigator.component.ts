import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { MenuItem, SubmenuItem } from './navigator.model';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigatorComponent implements OnInit {
  private _expandedMenuItems: { [key: number]: true | undefined } = {};
  private _closed = false;

  items: MenuItem[] = [
    {
      name: 'Dashboard',
      icon: 'bx-grid-alt',
      routerLink: 'page-with-stepper'
    },
    {
      name: 'Category',
      icon: 'bx-collection',
      children: [
        {name: 'HTML & CSS'},
        {name: 'Javascript'},
        {name: 'PHP'}
      ]
    },
    {
      name: 'Posts',
      icon: 'bx-book-alt',
      children: [
        {name: 'Web Design'},
        {name: 'Login form'},
        {name: 'Card design'}
      ]
    },
    {
      name: 'Analytics',
      icon: 'bx-pie-chart-alt-2'
    },
    {
      name: 'Chart',
      icon: 'bx-line-chart'
    },
    {
      name: 'Plugins',
      icon: 'bx-plug',
      children: [
        {name: 'UI Face'},
        {name: 'Pigments'},
        {name: 'Box Icons'}
      ]
    },
    {
      name: 'Explore',
      icon: 'bx-compass'
    },
    {
      name: 'History',
      icon: 'bx-history'
    },
    {
      name: 'Settings',
      icon: 'bx-cog'
    }
  ]
  item1: MenuItem = {
    name: 'Dashboard',
    icon: 'bx-grid-alt'
  }
  item2: MenuItem = {
    name: 'Category',
    icon: 'bx-collection'
  }
  item2Children: SubmenuItem[] = [
    {name: 'HTML & CSS'},
    {name: 'Javascript'},
    {name: 'PHP'}
  ]
  item3: MenuItem = {
    name: 'Posts',
    icon: 'bx-book-alt'
  }
  item3Children: SubmenuItem[] = [
    {name: 'Web Design'},
    {name: 'Login form'},
    {name: 'Card design'}
  ]
  item4: MenuItem = {
    name: 'Analytics',
    icon: 'bx-pie-chart-alt-2'
  }
  item5: MenuItem = {
    name: 'Chart',
    icon: 'bx-line-chart'
  }
  item6: MenuItem = {
    name: 'Plugins',
    icon: 'bx-plug'
  }
  item6Children: SubmenuItem[] = [
    {name: 'UI Face'},
    {name: 'Pigments'},
    {name: 'Box Icons'}
  ]
  item7: MenuItem = {
    name: 'Explore',
    icon: 'bx-compass'
  }
  item8: MenuItem = {
    name: 'History',
    icon: 'bx-history'
  }
  item9: MenuItem = {
    name: 'Settings',
    icon: 'bx-cog'
  }
  constructor() {}

  ngOnInit(): void {}

  set isClosed(value: boolean) {
    this._closed = value;
  }
  get isClosed(): boolean {
    return this._closed;
  }

  toggleMenuItemOpened(value: number) {
    if (this._expandedMenuItems[value]) {
      delete this._expandedMenuItems[value];
    } else {
      this._expandedMenuItems[value] = true;
    }
  }

  isMenuItemOpened(value: number) {
    return this._expandedMenuItems[value] !== undefined
      ? this._expandedMenuItems[value]
      : false;
  }

}
