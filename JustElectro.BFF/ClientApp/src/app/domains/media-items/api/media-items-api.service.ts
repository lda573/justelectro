import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaItemDto, CreateMediaItemRequest } from '../models/media-item.model';

@Injectable({ providedIn: 'root' })
export class MediaItemsApiService {
  private readonly baseUrl = '/api/media-items';

  constructor(private http: HttpClient) {}

  getAll(): Observable<MediaItemDto[]> {
    return this.http.get<MediaItemDto[]>(this.baseUrl);
  }

  getById(id: number): Observable<MediaItemDto> {
    return this.http.get<MediaItemDto>(`${this.baseUrl}/${id}`);
  }

  create(request: CreateMediaItemRequest): Observable<MediaItemDto> {
    return this.http.post<MediaItemDto>(this.baseUrl, request);
  }
}
