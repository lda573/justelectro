using JustElectro.BFF.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JustElectro.BFF.Controllers;

[ApiController]
[Route("api/orders")]
[Authorize]
public class OrdersController : ControllerBase
{
    // TODO: replace stub data with calls to internal microservices/DB
    private static readonly List<OrderDto> _orders =
    [
        new(1, "Completed", DateTimeOffset.UtcNow.AddDays(-3), [new(1, 1, "Sample Product A", 2, 9.99m)], 19.98m),
    ];

    [HttpGet]
    public IActionResult GetAll() => Ok(_orders);

    [HttpGet("{id:int}")]
    public IActionResult GetById(int id)
    {
        var order = _orders.FirstOrDefault(o => o.Id == id);
        return order is null
            ? NotFound(new ApiError("NOT_FOUND", $"Order {id} was not found."))
            : Ok(order);
    }

    [HttpPost]
    public IActionResult Create([FromBody] CreateOrderRequest request)
    {
        var lines = request.Lines.Select((l, i) =>
            new OrderLineDto(i + 1, l.MediaItemId, $"Product {l.MediaItemId}", l.Quantity, 9.99m)).ToArray();
        var total = lines.Sum(l => l.Quantity * l.UnitPrice);
        var newId = _orders.Count > 0 ? _orders.Max(o => o.Id) + 1 : 1;
        var newOrder = new OrderDto(newId, "Pending", DateTimeOffset.UtcNow, lines, total);
        _orders.Add(newOrder);
        return CreatedAtAction(nameof(GetById), new { id = newOrder.Id }, newOrder);
    }
}
