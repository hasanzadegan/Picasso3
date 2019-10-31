using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class DesignResultDTO
    {
        public decimal DesignResultId { get; set; }
        public Nullable<decimal> DesignId { get; set; }
        public Nullable<decimal> isMulipledest { get; set; }
        public Nullable<decimal> DestPageContentId { get; set; }
        public Nullable<decimal> DestDesignId { get; set; }
        public string DestDesc { get; set; }
        public string ResultCase { get; set; }
        public string ResultMessage { get; set; }
        public string DashboardName { get; set; }
        public string PageContentDesc { get; set; }
        public string PanelName { get; set; }
        public string RenderJs { get; set; }
    }
}
