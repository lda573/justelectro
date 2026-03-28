namespace JustElectro.BFF.Models;

public record LoginRequest(string Username, string Password);
public record LoginResponse(string AccessToken, string TokenType, int ExpiresIn);
public record UserInfo(string UserId, string Username, string[] Roles);
