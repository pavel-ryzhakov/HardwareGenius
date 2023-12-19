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
        public List<string>? ManufacturerNamesList { get; set; } 
        public List<string>? AttributeValuesList  { get; set; } 
        public string? Model { get; set; }
        public string? SearchTerm { get; set; }


        public bool ValidPriceRange => MinPrice <= MaxPrice;
    }
}
