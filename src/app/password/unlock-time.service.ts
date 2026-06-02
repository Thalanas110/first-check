import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { timeout } from 'rxjs/operators';

interface WorldTimeApiResponse {
  dateTime?: string;
}

const MANILA_TIME_API_URL = 'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Manila';
const MANILA_UNLOCK_INSTANT_MS = Date.parse('2026-06-14T16:00:00.000Z');
const TIME_API_TIMEOUT_MS = 4000;

@Injectable({ providedIn: 'root' })
export class UnlockTimeService {
  private readonly http = inject(HttpClient);

  async canPrefillPassword(): Promise<boolean> {
    const currentInstantMs = await this.resolveCurrentInstantMs();
    return currentInstantMs >= MANILA_UNLOCK_INSTANT_MS;
  }

  private async resolveCurrentInstantMs(): Promise<number> {
    try {
      const response = await firstValueFrom(
        this.http.get<WorldTimeApiResponse>(MANILA_TIME_API_URL).pipe(timeout(TIME_API_TIMEOUT_MS))
      );
      const remoteInstantMs = Date.parse(response.dateTime ?? '');

      if (Number.isNaN(remoteInstantMs)) {
        throw new Error('Time API returned an invalid datetime.');
      }

      return remoteInstantMs;
    } catch {
      return Date.now();
    }
  }
}
