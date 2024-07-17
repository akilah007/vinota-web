import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-roam-free',
  templateUrl: './roam-free.component.html',
  styleUrls: ['./roam-free.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('1s ease-out',
              style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('1s ease-in',
              style({opacity: 0}))
          ]
        )
      ]
    )
  ]
})
export class RoamFreeComponent {
  message: string = '';
  isSuccess = false;

}
