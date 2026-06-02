import { Injectable } from '@angular/core';

export interface Particle {
  x: number;
  delay: number;
  duration: number;
  size: number;
  symbol: string;
}

const PARTICLE_SYMBOLS = ['♥', '✦', '✧', '❧', '❦'];

@Injectable({ providedIn: 'root' })
export class AppShellService {
  readonly particles = this.createParticles();

  private createParticles(): ReadonlyArray<Particle> {
    return Array.from({ length: 18 }, (_, index) => ({
      x: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 14,
      size: 10 + Math.random() * 16,
      symbol: PARTICLE_SYMBOLS[index % PARTICLE_SYMBOLS.length]
    }));
  }
}
