export interface MediaItemDto {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  price: number;
}

export interface CreateMediaItemRequest {
  title: string;
  description: string;
  thumbnailUrl: string;
  price: number;
}
