using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class DesignDTO
    {
        public decimal DesignId { get; set; }
        public Nullable<decimal> ProjectId { get; set; }
        public string DesignDesc{ get; set; }
        public Nullable<decimal> isMulipledest { get; set; }
        public Nullable<decimal> PageContentId { get; set; }
        public decimal DestDesignId { get; set; }
        public string ResultCase { get; set; }
        public string ResultMessage { get; set; }
        public string PageContentDesc { get; set; }
        public string ActionUrl { get; set; }
        public string ActionParameter { get; set; }
        public string ReturnObject { get; set; }
        public string ReturnStorage { get; set; }
        public string RenderJS { get; set; }
        public string MethodType { get; set; }
        public string BeforeCallback { get; set; }
        public Nullable<decimal> BaseUrlId { get; set; }
        public string InnerCallback { get; set; }
    }
}
