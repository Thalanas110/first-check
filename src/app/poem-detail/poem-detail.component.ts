import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PoemDetailAnimationsService } from './poem-detail-animations.service';
import { PoemDetailService } from './poem-detail.service';

@Component({
  selector: 'app-poem-detail',
  standalone: true,
  templateUrl: './poem-detail.component.html',
  styleUrl: './poem-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PoemDetailService],
  animations: PoemDetailAnimationsService.triggers
})
export class PoemDetailComponent {
  protected readonly detail = inject(PoemDetailService);
}
