import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger, group } from '@angular/animations';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    // define animation for dropdown
    trigger('dropdown', [
      // define states for dropdown
      state('open', style({
        height: '*',
        opacity: '1'
      })),
      state('closed', style({
        height: '0px',
        opacity: '0'
      })),
      // define transitions for dropdown
      transition('closed => open', [
        style({ height: '0px', opacity: '0' }),
        group([
          animate('0.5s ease-in-out'),
          query('.dropdown-item, dropdown-divider', [
            style({ opacity: 0, transform: 'translateY(-10px)' }),
            stagger(100, [
              animate('0.5s ease-in-out', style({ opacity: 1, transform: 'none' }))
            ])
          ])
        ])
      ]),

      // define transitions for dropdown (reverse)
      transition('open => closed', [
        style({ height: '*', opacity: '1' }),
        group([
          animate('0.5s ease-in-out'),
          query('.dropdown-item, dropdown-divider', [
            style({ opacity: 1, transform: 'none' }),
            stagger(-100, [
              animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
            ])
          ])
        ])
      ])
    ])
  ]
})
export class NavBarComponent {
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
