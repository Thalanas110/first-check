import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PoemsService } from '../poems.service';

@Injectable()
export class HomeService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly poemsService = inject(PoemsService);
  private readonly router = inject(Router);
  private readonly revealTimer: ReturnType<typeof setTimeout>;

  readonly poems = this.poemsService.getAllPoems();
  readonly hoveredId = signal<number | null>(null);
  readonly showCards = signal(false);

  constructor() {
    this.revealTimer = setTimeout(() => this.showCards.set(true), 400);
    this.destroyRef.onDestroy(() => clearTimeout(this.revealTimer));
  }

  navigateToPoem(id: number): void {
    void this.router.navigate(['/poem', id]);
  }

  setHoveredPoem(id: number | null): void {
    this.hoveredId.set(id);
  }
}
