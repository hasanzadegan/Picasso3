using Picasso2.Entity;
using Picasso2.DTO;

namespace Picasso2.BLL.BIZ
{
    public class BLGenericType
    {
        GenericTypeEntity genericTypeEntity = new GenericTypeEntity();
        public GenericTypeDTO getGenericTypeInfo(decimal genericTypeId) {

            return genericTypeEntity.getGenericTypeInfo(genericTypeId);
        }
    }
}
