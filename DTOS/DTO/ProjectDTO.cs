using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class ProjectDTO
    {
        public decimal ProjectId { get; set; }
        public decimal OwnerUserId { get; set; }
        public Nullable<decimal> TemplateId { get; set; }
        public string ProjectName { get; set; }
        public string ProjectDescription { get; set; }
        public Nullable<decimal> IsActive { get; set; }
        public string ScriptBasePath { get; set; }

        public List<PageDTO> pageList { get; set; }
        public List<LayoutDTO> layoutList { get; set; }
        public List<InheritedTypeDTO> inheritedTypeList { get; set; }
        public List<ContainerTokenDTO> containerTokenList { get; set; }
        public List<ContentDTO> contentList { get; set; }
    }
}
