using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Entities;
using Core.Shared.RequestFeatures;

namespace Infrastructure.Extensions
{
    public static class RepositoryProductExtensions
    {

        public static IQueryable<Product> FilterCategory(this IQueryable<Product> products, int categoryId)
        {
            
            return products.Where(e => (e.CategoryId == categoryId));
        }

        public static IQueryable<Product> FilterManufacture(this IQueryable<Product> products, List<int> manufacturerId)
        {

            return products.Where(e => manufacturerId.Contains(e.ManufacturerId));
        }

        public static IQueryable<Product> FilterAttributes(this IQueryable<Product> products, string attributeValue)
        {

            return products.Where(c => c.AttributeValues.Any(se => se.Value == attributeValue));
        }

        //public static IQueryable<Manufacturer> FilterParams(this IQueryable<Product> manufacturer, CatalogParameters parameters)
        //{
        //    var allmanufacturers = manufacturer.Where(e => (e.Name == parameters.Manufacturer));
        //    return IQueryable<Product> = allmanufacturers.Where(e => (e.Id = Product.ManufacturerId));

        //}



        public static IQueryable<Product> FilterProduct(this IQueryable<Product> products, uint minPrice,
            uint maxPrice) =>
            products.Where(e => (e.Price >= minPrice && e.Price <= maxPrice));

       

        public static IQueryable<Product> Search(this IQueryable<Product> graphicCards,
            string searchTerm)
        {
            if (string.IsNullOrWhiteSpace(searchTerm)) return graphicCards;
            var lowerCaseTerm = searchTerm.Trim().ToLower();
            return graphicCards.Where(e => e.Model.ToLower().Contains(lowerCaseTerm));
        }

        public static IQueryable<Product> Sort(this IQueryable<Product> products, string orderByQueryString)
        {
            
                return products.OrderBy(e => e.Model).ThenBy(o => o.Price);

        }
    }
}
