using Picasso2.Entity;
using Picasso2.DTO;
using System.Collections.Generic;

namespace Picasso2.BLL.BIZ
{
    public  class BLInheritedType
    {
        InheritedTypeEntity inheritedTypeEntity = new InheritedTypeEntity();
        GenericTypeEntity genericTypeEntity = new GenericTypeEntity();
        public InheritedTypeDTO getInheritedTypeInfo(decimal inheritedTypeId)
        {
            return inheritedTypeEntity.getInheritedTypeInfo(inheritedTypeId);
        }
        public InheritedTypeDTO getInheritedTypeInfo(string title)
        {
            return inheritedTypeEntity.getInheritedTypeInfo(title);
        }

        public InheritedTypeDTO saveInheritedType(ComponentDTO componentDTO,string componentName,decimal projectId)
        {
            return inheritedTypeEntity.saveInheritedType(componentDTO, componentName,projectId);
        }

        public List<InheritedTypeDTO> getInheritedTypeList()
        {
            return inheritedTypeEntity.getInheritedTypeList();
        }

        public int deleteInheritedType(decimal inheritedTypeId)
        {
            return inheritedTypeEntity.deleteInheritedType(inheritedTypeId);
        }

        internal GenericTypeDTO getGenericType(decimal inheritedTypeId)
        {
            InheritedTypeDTO inheritedTypeDTO = inheritedTypeEntity.getInheritedTypeInfo(inheritedTypeId);
            GenericTypeDTO genericTypeDTO = genericTypeEntity.getGenericTypeInfo(inheritedTypeDTO.GenericTypeId);
            return genericTypeDTO;
        }
    }
}
