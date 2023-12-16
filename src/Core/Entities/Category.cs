using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    [Table("categories")] 
    public record Category
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        public string Name { get; set; } = string.Empty;
        public IEnumerable<Product> Products { get; } = new List<Product>();
        public IEnumerable<AttributeName> AttributeNames { get; set; } = new List<AttributeName>();
    }
}
