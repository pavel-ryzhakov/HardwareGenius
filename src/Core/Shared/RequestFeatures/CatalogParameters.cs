using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Shared.RequestFeatures
{
    public class CatalogParameters : RequestParameters
    {
        public CatalogParameters()
        {
            //Sort = "Id";
        }
        public uint MinPrice { get; set; }
        public uint MaxPrice { get; set; } = int.MaxValue;
        public int CategoryId { get; set; }
        public List<int> ManufacturerId { get; set; } = null;
        public string AttributeValue  { get; set; } = null;
        public string? Model { get; set; }
        public string? SearchTerm { get; set; }


        public bool ValidPriceRange => MinPrice <= MaxPrice;
    }
}
