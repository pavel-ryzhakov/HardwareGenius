using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    [Table("attribute_values")]
    public record AttributeValue
    {
        [Column("id")]
        public Guid Id { get; set; }
        [Column("value")]
        public string Value { get; set; } = null!;
        [Column("product_id")]
        public Guid ProductId { get; set; }
        [Column("attribute_name_id")]
        public int AttributeNameId { get; set; }
    }
}
