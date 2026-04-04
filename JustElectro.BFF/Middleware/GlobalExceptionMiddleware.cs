using System.Text.Json;
using JustElectro.BFF.Models;

namespace JustElectro.BFF.Middleware;

public class GlobalExceptionMiddleware(RequestDelegate next, ILogger<GlobalExceptionMiddleware> logger)
{
    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await next(context);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Unhandled exception for {Method} {Path}", context.Request.Method, context.Request.Path);
            await WriteErrorResponseAsync(context, ex);
        }
    }

    private static async Task WriteErrorResponseAsync(HttpContext context, Exception ex)
    {
        context.Response.ContentType = "application/json";
        var (statusCode, error) = ex switch
        {
            UnauthorizedAccessException => (StatusCodes.Status401Unauthorized, new ApiError("UNAUTHORIZED", "Authentication required.")),
            _ => (StatusCodes.Status500InternalServerError, new ApiError("INTERNAL_ERROR", "An unexpected error occurred."))
        };
        context.Response.StatusCode = statusCode;
        await context.Response.WriteAsync(JsonSerializer.Serialize(error, JsonSerializerOptions.Web));
    }
}

public static class GlobalExceptionMiddlewareExtensions
{
    public static IApplicationBuilder UseGlobalExceptionHandling(this IApplicationBuilder app)
        => app.UseMiddleware<GlobalExceptionMiddleware>();
}
