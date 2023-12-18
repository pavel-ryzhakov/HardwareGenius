using Core.Entities;
using Core.Shared.RequestFeatures;

namespace Core.Interfaces.Repository
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllProductsAsync(bool trackChanges, CatalogParameters parameters);
        Task<Product> GetProductAsync(Guid Id, bool trackChanges);
    }
}
