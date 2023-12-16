using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    [Table("manufacturers")]
    public record Manufacturer
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        public string Name { get; set; } = string.Empty;
        public ICollection<Product> Products { get; } = new List<Product>();
    }
}
