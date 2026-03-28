import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaItemDto } from '../../models/media-item.model';

@Component({
  selector: 'app-media-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-item-card.component.html',
})
export class MediaItemCardComponent {
  @Input() item!: MediaItemDto;
}
