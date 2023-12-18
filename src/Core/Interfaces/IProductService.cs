using Core.Entities;
using Core.Shared.DataTransferObjects;
using Core.Shared.RequestFeatures;

namespace Core.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDto>> GetAllProductsAsync(bool trackChanges, CatalogParameters parameters);
        Task<ProductDto> GetProductAsync(Guid id, bool trackChanges);
    }
}
