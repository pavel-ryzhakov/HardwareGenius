using Web.Extensions;

namespace Web
{
    public class Program
    {
        public static void Main(string[] args)
        { 
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.ConfigureNpgsqlContext(builder.Configuration);
            builder.Services.ConfigureRepositoryManager();
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.ConfigureServiceManager();
            builder.Services.ConfigureCors();
            builder.Services.ConfigureIISIntegration();
            builder.Services.AddSwaggerGen();
            builder.Services.AddAutoMapper(typeof(Program));

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseStaticFiles();

            app.UseHttpsRedirection();

            app.UseCors("CorsPolicy");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
