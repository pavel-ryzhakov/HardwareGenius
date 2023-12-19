using AutoMapper;
using Core.Entities;
using Core.Shared.DataTransferObjects;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Web
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDto>();

        }
    }
}
