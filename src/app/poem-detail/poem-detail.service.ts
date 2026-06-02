import { computed, effect, Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Poem, PoemsService } from '../poems.service';

@Injectable()
export class PoemDetailService {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly poemsService = inject(PoemsService);
  private readonly poemIdParam = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id'))),
    { initialValue: this.route.snapshot.paramMap.get('id') }
  );
  private readonly context = computed(() => {
    const poemId = this.parsePoemId(this.poemIdParam());
    return poemId === null ? undefined : this.poemsService.getPoemContext(poemId);
  });

  readonly poem = computed(() => this.context()?.poem);
  readonly prevPoem = computed(() => this.context()?.prev ?? null);
  readonly nextPoem = computed(() => this.context()?.next ?? null);
  readonly stanzas = computed(() => this.context()?.stanzas ?? []);

  constructor() {
    effect(() => {
      if (this.poemIdParam() !== null && !this.context()) {
        void this.router.navigate(['/']);
      }
    });
  }

  goBack(): void {
    void this.router.navigate(['/']);
  }

  navigateTo(poem: Poem): void {
    void this.router.navigate(['/poem', poem.id]);
  }

  private parsePoemId(value: string | null): number | null {
    if (value === null) {
      return null;
    }

    const poemId = Number(value);
    return Number.isInteger(poemId) ? poemId : null;
  }
}
