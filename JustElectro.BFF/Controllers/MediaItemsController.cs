using JustElectro.BFF.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JustElectro.BFF.Controllers;

[ApiController]
[Route("api/media-items")]
[Authorize]
public class MediaItemsController : ControllerBase
{
    // TODO: replace stub data with calls to internal microservices/DB
    private static readonly List<MediaItemDto> _items =
    [
        new(1, "Sample Product A", "Description for product A", "/assets/images/placeholder.png", 9.99m),
        new(2, "Sample Product B", "Description for product B", "/assets/images/placeholder.png", 19.99m),
    ];

    [HttpGet]
    public IActionResult GetAll() => Ok(_items);

    [HttpGet("{id:int}")]
    public IActionResult GetById(int id)
    {
        var item = _items.FirstOrDefault(i => i.Id == id);
        return item is null
            ? NotFound(new ApiError("NOT_FOUND", $"Media item {id} was not found."))
            : Ok(item);
    }

    [HttpPost]
    public IActionResult Create([FromBody] CreateMediaItemRequest request)
    {
        var newItem = new MediaItemDto(_items.Max(i => i.Id) + 1, request.Title, request.Description, request.ThumbnailUrl, request.Price);
        _items.Add(newItem);
        return CreatedAtAction(nameof(GetById), new { id = newItem.Id }, newItem);
    }
}
