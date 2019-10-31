using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class ContentDTO
    {
        public decimal PageContentId { get; set; }
        public string PageContentName { get; set; }

        public decimal ContentId { get; set; }
        public string ContentName { get; set; }
        public string Icon { get; set; }
        public string Path { get; set; }
        public string FileName { get; set; }
        public Nullable<decimal> LayoutId { get; set; }
        public Nullable<decimal> ProjectId { get; set; }
        public Nullable<decimal> OrderInPage { get; set; }
        public decimal PageId { get; set; }
        public string FullPath
        {
            get
            {
                return "Content/"+this.Path + '/' + (this.FileName == null ? this.PageId.ToString() : this.FileName);
            }
        }
    }
}
