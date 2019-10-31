using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class TableBodyDTO
    {
        public decimal TableBodyId { get; set; }
        public Nullable<decimal> ProjectId { get; set; }
        public Nullable<decimal> DeletePageContentId { get; set; }
        public Nullable<decimal> SavePageContentId { get; set; }
        public string TableName { get; set; }
        public string CssClass { get; set; }
        public string RestApi { get; set; }
        public string RenderView { get; set; }
        public string RenderEdit { get; set; }
        public string ColumnJSON { get; set; }
        public string NgModel { get; set; }
        public Nullable<bool> HasView { get; set; }
        public Nullable<bool> HasEdit { get; set; }
        public Nullable<bool> HasNew { get; set; }
        public Nullable<bool> HasDelete { get; set; }
        public List<TableColumnDTO> ColumnList { get; set; }
    }
}
