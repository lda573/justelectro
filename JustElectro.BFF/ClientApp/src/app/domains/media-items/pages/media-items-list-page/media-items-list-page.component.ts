import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaItemsApiService } from '../../api/media-items-api.service';
import { MediaItemDto } from '../../models/media-item.model';
import { MediaItemCardComponent } from '../../ui/media-item-card/media-item-card.component';

@Component({
  selector: 'app-media-items-list-page',
  standalone: true,
  imports: [CommonModule, MediaItemCardComponent],
  templateUrl: './media-items-list-page.component.html',
})
export class MediaItemsListPageComponent implements OnInit {
  items: MediaItemDto[] = [];
  loading = true;
  error = '';

  constructor(private mediaItemsApi: MediaItemsApiService) {}

  ngOnInit(): void {
    this.mediaItemsApi.getAll().subscribe({
      next: items => { this.items = items; this.loading = false; },
      error: (err: any) => { this.error = err?.error?.message ?? 'Failed to load items.'; this.loading = false; }
    });
  }
}
