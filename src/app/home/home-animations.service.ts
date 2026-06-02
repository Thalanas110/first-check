import { Injectable } from '@angular/core';
import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';

const heroTitle = trigger('heroTitle', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-30px)' }),
    animate(
      '800ms 200ms cubic-bezier(0.0, 0, 0.2, 1)',
      style({ opacity: 1, transform: 'translateY(0)' })
    )
  ])
]);

const heroSub = trigger('heroSub', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate(
      '700ms 500ms cubic-bezier(0.0, 0, 0.2, 1)',
      style({ opacity: 1, transform: 'translateY(0)' })
    )
  ])
]);

const heroDivider = trigger('heroDivider', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scaleX(0)' }),
    animate('600ms 700ms ease-out', style({ opacity: 1, transform: 'scaleX(1)' }))
  ])
]);

const cardList = trigger('cardList', [
  transition(':enter', [
    query(
      '.poem-card',
      [
        style({ opacity: 0, transform: 'translateY(50px) scale(0.96)' }),
        stagger(80, [
          animate(
            '550ms cubic-bezier(0.0, 0, 0.2, 1)',
            keyframes([
              style({
                opacity: 0,
                transform: 'translateY(50px) scale(0.96)',
                offset: 0
              }),
              style({
                opacity: 0.8,
                transform: 'translateY(8px) scale(0.99)',
                offset: 0.75
              }),
              style({ opacity: 1, transform: 'translateY(0) scale(1)', offset: 1 })
            ])
          )
        ])
      ],
      { optional: true }
    )
  ])
]);

@Injectable({ providedIn: 'root' })
export class HomeAnimationsService {
  static readonly triggers = [heroTitle, heroSub, heroDivider, cardList];
}
