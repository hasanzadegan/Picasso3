using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class ContainerTokenDTO
    {
        public decimal ContainerTokenId { get; set; }
        public Nullable<decimal> PageId { get; set; }
        public Nullable<decimal> ProjectId { get; set; }
        public string TokenName { get; set; }
        public string TokenValue { get; set; }
        public bool overrided{ get; set; }

    }
}
