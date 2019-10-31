using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class GenericTypeDTO
    {
        public decimal GenericTypeId { get; set; }
        public string Title { get; set; }
        public decimal GenerationTypeId { get; set; }
        public string TokenizeString { get; set; }
        public Nullable<decimal> WebDefinerId { get; set; }
    }
}
