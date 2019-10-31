using System;

namespace Picasso2.DTO
{
    public class TemplateTypeDTO
    {
        public decimal TemplateTypeId { get; set; }
        public string Title { get; set; }
        public string TokenizeString { get; set; }
        public string IncludeTag { get; set; }
        public Nullable<decimal> WebDefinerId { get; set; }

    }
}