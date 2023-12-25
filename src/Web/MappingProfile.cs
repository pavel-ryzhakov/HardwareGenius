using AutoMapper;
using Core.Entities;
using Core.Shared.DataTransferObjects;

namespace Web
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDto>();
                //.ForMember(dest => dest.brand,
                //opt => opt.MapFrom(src => src.Manufacturer.Name));
        }
    }
}
