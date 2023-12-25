using AutoMapper;
using Core.Entities;
using Core.Shared.DataTransferObjects;

namespace Web
{
    public class MappingProfile : Profile
    { 
        public MappingProfile()
        {
            CreateMap<Product, ProductDto>().ForMember(dest => 
                dest.ManufacturerName, opt => 
                opt.MapFrom(src => src.Manufacturer.Name));
        }
    }
}
