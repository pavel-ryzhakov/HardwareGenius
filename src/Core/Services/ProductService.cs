using Core.Entities;
using Core.Interfaces;
using Core.Interfaces.Repository;

namespace Core.Services
{
    public class ProductService : IProductService
    {
        private readonly IRepositoryManager _repository;
        public ProductService(IRepositoryManager repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Product>> GetAllProductsAsync(bool trackChanges)
        {
            return await _repository.Product.GetAllProductsAsync(trackChanges);
        }

        public async Task<Product> GetProductAsync(int Id, bool trackChanges)
        {
            return await _repository.Product.GetProductAsync(Id, trackChanges);
        }
    }
}
