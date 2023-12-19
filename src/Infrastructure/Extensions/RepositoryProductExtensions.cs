using Core.Entities;

namespace Infrastructure.Extensions
{
    public static class RepositoryProductExtensions
    {

        public static IQueryable<Product> FilterCategory(this IQueryable<Product> products, int categoryId)
        {
            return products.Where(e => (e.CategoryId == categoryId));
        }

        public static IQueryable<Product> FilterManufacture(this IQueryable<Product> products,
            List<string> manufacturerNamesList)
        {
            if (manufacturerNamesList != null && manufacturerNamesList.Any())
            {
                return products.Where(c => manufacturerNamesList.Contains(c.Manufacturer.Name));
            }
            else
            { 
                return products;  
            }
        }
        

        public static IQueryable<Product> FilterAttributes(this IQueryable<Product> products, List<string> attributeValuesList)
        {
            if (attributeValuesList != null && attributeValuesList.Any())
            {
                return products.Where(c => c.AttributeValues.Any(se => attributeValuesList.Contains(se.Value)));
            }
            else
            { 
                return products;  
            }
        }

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
