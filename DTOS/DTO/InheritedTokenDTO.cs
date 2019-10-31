using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class InheritedTokenDTO
    {
        public decimal InheritedTokenId { get; set; }
        public Nullable<decimal> InheritedTypeId { get; set; }
        public string TokenName { get; set; }
        public string TokenValue { get; set; }
    }
}
