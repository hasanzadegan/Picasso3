using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class PanelDTO
    {
        public decimal PanelId { get; set; }
        public Nullable<decimal> ProjectId { get; set; }
        public string Title { get; set; }
        public string PanelSetting { get; set; }
        public string Layout { get; set; }

    }
}
