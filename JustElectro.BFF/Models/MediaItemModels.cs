namespace JustElectro.BFF.Models;

public record MediaItemDto(int Id, string Title, string Description, string ThumbnailUrl, decimal Price);
public record CreateMediaItemRequest(string Title, string Description, string ThumbnailUrl, decimal Price);
