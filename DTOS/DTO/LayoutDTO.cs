using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class LayoutDTO
    {
        public decimal LayoutId { get; set; }
        public Nullable<decimal> ProjectId { get; set; }
        public string TokenizeString { get; set; }
        public string LayoutHTML { get; set; }
        public string LayoutName { get; set; }

    }
}
