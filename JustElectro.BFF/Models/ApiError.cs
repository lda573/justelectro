namespace JustElectro.BFF.Models;

public record ApiError(string Code, string Message, IDictionary<string, string[]>? Details = null);
