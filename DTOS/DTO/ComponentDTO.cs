using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class ComponentDTO
    {
        public decimal ComponentId { get; set; }
        public decimal InheritedTypeId { get; set; }
        public string InheritedTypeName { get; set; }
        public decimal ContentId { get; set; }
        public string TileName { get; set; }
        public string EventName { get; set; }
        public string EventFunction { get; set; }
        public string RenderHTML { get; set; }
        public string ComponentName { get; set; }

        public decimal DesignId { get; set; }
        public decimal TableBodyId { get; set; }
        public DesignDTO Design { get; set; }
        public InheritedTypeDTO InheritedType { get; set; }
        public List<ComponentTokenDTO> ComponentTokenList { get; set; }
        public Nullable<decimal> OrderInTile { get; set; }
        public decimal SourcePageContentId { get; set; }
        public decimal ComponentTableId { get; set; }
        public string CloneName { get; set; }
    }
}
