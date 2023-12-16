using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    [Table("attribute_names")]
    public record AttributeName
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("category_id")]
        public int CategoryId { get; set; }
        public IEnumerable<AttributeValue> AttributeValues { get; set; } = new List<AttributeValue>();
    }
}
