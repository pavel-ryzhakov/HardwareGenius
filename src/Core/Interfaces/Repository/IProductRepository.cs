using Core.Entities;

namespace Core.Interfaces.Repository
{ 
    public interface IProductRepository
    { 
        Task<IEnumerable<Product>> GetAllProductsAsync(bool trackChanges);
        Task<Product> GetProductAsync(int productCardId, bool trackChanges);
    }
}
