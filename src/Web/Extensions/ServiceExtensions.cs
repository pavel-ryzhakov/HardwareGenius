using Core.Interfaces;
using Core.Interfaces.Repository;
using Core.Services;
using Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;


namespace Web.Extensions
{
    public static class ServiceExtensions
    {

        /// <summary>
        /// Настройка политики Cors. Разрешаем запросы от любого домена.
        /// </summary>
        public static void ConfigureCors(this IServiceCollection services) => 
            services.AddCors(options => 
                { 
                    options.AddPolicy("CorsPolicy", builder => 
                    builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
                });

        /// <summary>
        /// Настройки интеграции в IIS
        /// </summary>
        public static void ConfigureIISIntegration(this IServiceCollection services) =>
            services.Configure<IISOptions>(options =>
            {
            });

        public static void ConfigureNpgsqlContext(this IServiceCollection services,
            IConfiguration configuration) =>
            services.AddDbContext<RepositoryContext>(opts =>
                opts.UseNpgsql(configuration.GetConnectionString("HardwareGeniusDataBase")));

        public static void ConfigureRepositoryManager(this IServiceCollection services) => 
            services.AddScoped<IRepositoryManager, RepositoryManager>();
        public static void ConfigureServiceManager(this IServiceCollection services) =>
            services.AddScoped<IServiceManager, ServiceManager>();
    }
}
