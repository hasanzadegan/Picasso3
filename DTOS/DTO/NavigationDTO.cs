using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class NavigationDTO
    {
        public decimal NavigationId { get; set; }
        public decimal ComponentId { get; set; }
        public decimal SourcePageContentId { get; set; }
        public decimal DestDesignId { get; set; }
        public decimal ContentId { get; set; }
        public decimal PageId { get; set; }
        public string PageName { get; set; }
        public string ContentName { get; set; }
        public string ConditionDesc { get; set; }

    }
}
