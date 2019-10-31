using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class DashboardDTO
    {
        public decimal DashboardId { get; set; }
        public Nullable<decimal> ProjectId { get; set; }
        public string Title { get; set; }
        public string Layout { get; set; }
        public string DashboardSetting { get; set; }
    }
}
