namespace JustElectro.BFF.Models;

public record OrderDto(int Id, string Status, DateTimeOffset CreatedAt, OrderLineDto[] Lines, decimal Total);
public record OrderLineDto(int Id, int MediaItemId, string Title, int Quantity, decimal UnitPrice);
public record CreateOrderRequest(CreateOrderLineRequest[] Lines);
public record CreateOrderLineRequest(int MediaItemId, int Quantity);
