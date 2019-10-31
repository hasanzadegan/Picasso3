using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class PageDTO
    {
        public decimal PageId { get; set; }
        public decimal ProjectId { get; set; }
        public string PageName { get; set; }
        public string FileName { get; set; }
        public string Path { get; set; }
        public string FullPath {
            get {
                return "Content/"+this.Path + '/' + (this.FileName == null ? this.PageId.ToString() : this.FileName);
            }
        }
        
        public Nullable<decimal> DefaultContentId { get; set; }
        public Nullable<decimal> ContainerTypeId { get; set; }

        public List<ContentDTO> PageContentList { get; set; }

    }
}
