import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppAnimationsService } from './animations/app-animations.service';
import { AppShellService } from './app-shell.service';
import { AccessGateService } from './password/access-gate.service';
import { PasswordComponent } from './password/password.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: AppAnimationsService.triggers
})
export class App {
  private readonly appAnimations = inject(AppAnimationsService);
  private readonly appShell = inject(AppShellService);

  protected readonly accessGate = inject(AccessGateService);
  protected readonly particles = this.appShell.particles;

  protected prepareRoute(outlet: RouterOutlet): string | undefined {
    return this.appAnimations.getRouteState(outlet);
  }
}
