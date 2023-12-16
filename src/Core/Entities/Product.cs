using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    [Table("products")]
    public record Product
    {
        [Column("id")]
        public Guid Id { get; set; }
        [Column("model")]
        public string Model { get; set; } = string.Empty;
        [Column("price")]
        public int Price { get; set; }
        [Column("img_url")]
        public string ImgUrl { get; set; } = string.Empty;
        [Column("category_id")]
        public int CategoryId { get; set; }
        public Category Category { get; set; } = null!;
        [Column("manufacturer_id")]
        public int ManufacturerId { get; set; }
        //public Manufacturer Manufacturer { get; set; } = null!;
        public ICollection<AttributeValue> AttributeValues { get; set; }
        [Column("accesed")]
        public bool Accesed { get; set; } = true;
    }
}
