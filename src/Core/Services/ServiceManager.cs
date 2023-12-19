using AutoMapper;
using Core.Interfaces;
using Core.Interfaces.Repository;
using Core.Shared.DataTransferObjects;

namespace Core.Services
{
    public class ServiceManager : IServiceManager
    {
        private readonly Lazy<IProductService> _productService;

        public ServiceManager(IRepositoryManager repositoryManager, IMapper mapper)
        {
            _productService = new Lazy<IProductService>(() =>
                new ProductService(repositoryManager, mapper));
            _productService = new Lazy<IProductService>(() => new ProductService(repositoryManager, mapper));
        }

        public IProductService ProductService => _productService.Value;
    }
}
