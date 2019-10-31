using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class TableColumnDTO
    {
        public decimal TableColumnId { get; set; }
        public Nullable<decimal> TableBodyId { get; set; }
        public Nullable<decimal> GenericTypeId { get; set; }
        public string ColName { get; set; }
        public string ColTitle { get; set; }
        public bool HasSort { get; set; }
        public bool HasFilter { get; set; }
        public Nullable<decimal> Flex { get; set; }
        public bool IsKey { get; set; }
        public bool IsShow { get; set; }

    }
}
