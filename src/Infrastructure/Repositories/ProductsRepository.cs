using Core.Entities;
using Core.Interfaces.Repository;
using Core.Shared.DataTransferObjects;
using Core.Shared.RequestFeatures;
using Infrastructure.Extensions;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class ProductRepository : RepositoryBase<Product>, IProductRepository
    {
        public ProductRepository(RepositoryContext repositoryContext) : base(repositoryContext) { }

        public async Task<IEnumerable<Product>> GetAllProductsAsync(bool trackChanges, CatalogParameters parameters)
        {

            //await FindAll(trackChanges).OrderBy(c => c.Price).ToListAsync();
            var products = await FindAll(trackChanges)
                .FilterCategory(parameters.CategoryId)
                .Search(parameters.SearchTerm)
                .FilterProduct(parameters.MinPrice, parameters.MaxPrice)
                .FilterManufacture(parameters.ManufacturerNamesList)
                .FilterAttributes(parameters.AttributeValuesList)
                .Skip((parameters.PageNumber - 1) * parameters.PageSize)
                .Take(parameters.PageSize)
                .Include(c=> c.AttributeValues)
                .Include(p => p.Manufacturer)
                .ToListAsync();
            

            return products;
            
        }

        public async Task<Product> GetProductAsync(Guid productId, bool trackChanges) =>
            await FindByCondition(c => c.Id.Equals(productId), trackChanges).SingleOrDefaultAsync();
    }
}
