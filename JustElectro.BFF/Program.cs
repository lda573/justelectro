using JustElectro.BFF.Middleware;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// ── Middleware pipeline ───────────────────────────────────────────────────────
app.UseGlobalExceptionHandling();
app.UseSecurityHeaders();

app.UseDefaultFiles();
app.UseStaticFiles();

// Fallback: serve index.html for Angular client-side routing
app.MapFallbackToFile("index.html");

app.Run();
