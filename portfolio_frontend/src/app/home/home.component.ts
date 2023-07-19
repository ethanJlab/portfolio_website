import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('* => hidden', [
        animate('500ms ease-in-out'),
      ]),
      transition('* => visible', [
        animate('500ms ease-in-out'),
      ]),
    ])
  ]
})
export class HomeComponent {
  constructor() { }

  isHoveredOverName: boolean = false;
  delayedIsHoveredOverName: boolean = false;

  toggleHoverName() {
    this.isHoveredOverName = !this.isHoveredOverName;
  }
  
  setHoverName(state: boolean) {
    this.isHoveredOverName = state;
    this.setDelayedHoverName(state);
  }

  setDelayedHoverName(state: boolean) {
    // wait 10 ms before setting the hover state
    setTimeout(() => {
      this.delayedIsHoveredOverName = state;
    }
    , 501);
  }

}
