using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class ComponentTokenDTO
    {
        public decimal sourcePageContentId { get; set; }

        public decimal InheritedTypeId { get; set; }
        public decimal InheritedTokenId { get; set; }
        public decimal ComponentTokenId { get; set; }
        public Nullable<decimal> ComponentId { get; set; }
        public string TokenName { get; set; }
        public string InheritedTokenValue { get; set; }
        public string TokenValue { get; set; }
        public bool Overrided { get; set; }
    }
}
