import { computed, effect, Injectable, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Poem, PoemsService } from '../poems.service';

@Injectable()
export class PoemDetailService {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly poemsService = inject(PoemsService);
  private readonly translationExpanded = signal(false);
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
  readonly hasTranslation = computed(() => (this.poem()?.translationLines?.length ?? 0) > 0);
  readonly isTranslationExpanded = computed(() => this.translationExpanded());
  readonly translationStanzas = computed(() => {
    const lines = this.poem()?.translationLines ?? [];
    return lines.length > 0 ? this.poemsService.getStanzas(lines) : [];
  });
  readonly totalPoems = computed(() => this.poemsService.getAllPoems().length);

  constructor() {
    effect(() => {
      this.poemIdParam();
      this.translationExpanded.set(false);
    });

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

  toggleTranslation(): void {
    if (!this.hasTranslation()) {
      return;
    }

    this.translationExpanded.update((expanded) => !expanded);
  }

  private parsePoemId(value: string | null): number | null {
    if (value === null) {
      return null;
    }

    const poemId = Number(value);
    return Number.isInteger(poemId) ? poemId : null;
  }
}
