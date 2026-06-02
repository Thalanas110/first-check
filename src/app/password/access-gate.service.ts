import { Injectable, signal } from '@angular/core';

const ACCESS_STORAGE_KEY = 'annahclaire.passwordGateUnlocked';

export const SITE_PASSWORD = 'mi-vida-madame-051526';

@Injectable({ providedIn: 'root' })
export class AccessGateService {
  private readonly unlocked = signal(this.readPersistedState());

  readonly isUnlocked = this.unlocked.asReadonly();

  tryUnlock(password: string): boolean {
    if (password !== SITE_PASSWORD) {
      return false;
    }

    this.unlocked.set(true);
    this.persistState(true);
    return true;
  }

  private readPersistedState(): boolean {
    try {
      return globalThis.localStorage?.getItem(ACCESS_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  }

  private persistState(value: boolean): void {
    try {
      globalThis.localStorage?.setItem(ACCESS_STORAGE_KEY, value ? 'true' : 'false');
    } catch {
      // In-memory state remains available when storage is blocked.
    }
  }
}
