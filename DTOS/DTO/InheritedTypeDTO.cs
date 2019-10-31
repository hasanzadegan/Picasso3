using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class InheritedTypeDTO
    {
        public decimal InheritedTypeId { get; set; }
        public decimal GenericTypeId { get; set; }
        public decimal GenerationTypeId { get; set; }
        public Nullable<decimal> IsGeneric { get; set; }
        public Nullable<decimal> ProjectId { get; set; }
        public string Title { get; set; }

        public GenericTypeDTO GenericType { get; set; }
        public List<InheritedTokenDTO> InheritedTokenList { get; set; }
    }
}
