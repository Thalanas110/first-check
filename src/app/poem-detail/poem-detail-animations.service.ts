import { Injectable } from '@angular/core';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';

const headerIn = trigger('headerIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-24px)' }),
    animate(
      '600ms 100ms cubic-bezier(0.0, 0, 0.2, 1)',
      style({ opacity: 1, transform: 'translateY(0)' })
    )
  ])
]);

const linesIn = trigger('linesIn', [
  transition(':enter', [
    query(
      '.poem-line',
      [
        style({ opacity: 0, transform: 'translateX(-16px)' }),
        stagger(
          45,
          animate(
            '420ms cubic-bezier(0.0, 0, 0.2, 1)',
            style({ opacity: 1, transform: 'translateX(0)' })
          )
        )
      ],
      { optional: true }
    )
  ])
]);

const navIn = trigger('navIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('500ms 600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

@Injectable({ providedIn: 'root' })
export class PoemDetailAnimationsService {
  static readonly triggers = [headerIn, linesIn, navIn];
}
