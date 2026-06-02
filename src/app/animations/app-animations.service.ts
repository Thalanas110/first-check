import { Injectable } from '@angular/core';
import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

const routeAnimations = trigger('routeAnimations', [
  transition('home => poem', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: '100vh'
        })
      ],
      { optional: true }
    ),
    query(':enter', [style({ opacity: 0, transform: 'translateX(60px)' })], {
      optional: true
    }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '300ms cubic-bezier(0.4, 0, 0.6, 1)',
            style({ opacity: 0, transform: 'translateX(-40px)' })
          )
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '450ms 100ms cubic-bezier(0.0, 0, 0.2, 1)',
            style({ opacity: 1, transform: 'translateX(0)' })
          )
        ],
        { optional: true }
      )
    ]),
    query(':enter', animateChild(), { optional: true })
  ]),
  transition('poem => home', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: '100vh'
        })
      ],
      { optional: true }
    ),
    query(':enter', [style({ opacity: 0, transform: 'translateX(-60px)' })], {
      optional: true
    }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '300ms cubic-bezier(0.4, 0, 0.6, 1)',
            style({ opacity: 0, transform: 'translateX(40px)' })
          )
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '450ms 100ms cubic-bezier(0.0, 0, 0.2, 1)',
            style({ opacity: 1, transform: 'translateX(0)' })
          )
        ],
        { optional: true }
      )
    ]),
    query(':enter', animateChild(), { optional: true })
  ])
]);

@Injectable({ providedIn: 'root' })
export class AppAnimationsService {
  static readonly triggers = [routeAnimations];

  getRouteState(outlet: RouterOutlet): string | undefined {
    return outlet.activatedRouteData?.['animation'];
  }
}
