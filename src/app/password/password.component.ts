import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AccessGateService, SITE_PASSWORD } from './access-gate.service';
import { UnlockTimeService } from './unlock-time.service';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordComponent {
  private readonly accessGate = inject(AccessGateService);
  private readonly unlockTime = inject(UnlockTimeService);

  protected readonly passwordControl = new FormControl('', { nonNullable: true });
  protected readonly canPrefillPassword = signal(false);
  protected readonly hasCheckedUnlockTime = signal(false);
  protected readonly errorMessage = signal('');

  constructor() {
    void this.initializePrefill();
  }

  protected submit(): void {
    if (this.accessGate.tryUnlock(this.passwordControl.value)) {
      this.errorMessage.set('');
      return;
    }

    this.errorMessage.set('Incorrect password.');
    this.passwordControl.setValue(this.canPrefillPassword() ? SITE_PASSWORD : '');
  }

  protected clearError(): void {
    if (this.errorMessage()) {
      this.errorMessage.set('');
    }
  }

  private async initializePrefill(): Promise<void> {
    const canPrefillPassword = await this.unlockTime.canPrefillPassword();
    this.canPrefillPassword.set(canPrefillPassword);

    if (canPrefillPassword) {
      this.passwordControl.setValue(SITE_PASSWORD);
    }

    this.hasCheckedUnlockTime.set(true);
  }
}
