using System.Collections.Generic;
using Picasso2.Entity;
using Picasso2.DTO;

namespace Picasso2.BLL.BIZ
{
    public class BLContainerType
    {
        ContainerTypeEntity containerTypeEntity = new ContainerTypeEntity();

        public List<ContainerTypeDTO> getContainerTypeList()
        {
            return containerTypeEntity.getContainerTypeList();
        }

        public ContainerTypeDTO getContainerType(decimal? containerTypeId)
        {
            return containerTypeEntity.getContainerType(containerTypeId);
        }
    }
}
