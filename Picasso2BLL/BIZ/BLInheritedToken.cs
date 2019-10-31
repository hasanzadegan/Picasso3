using System.Collections.Generic;
using Picasso2.Entity;
using Picasso2.DTO;

namespace Picasso2.BLL.BIZ
{
    public  class BLInheritedToken
    {
        InheritedTypeEntity inheritedTypeEntity = new InheritedTypeEntity();
        InheritedTokenEntity inheritedTokenEntity  = new InheritedTokenEntity();

        public int cloneInheritedType(decimal inheritedTypeId, string title, List<KeyValuePair<string, string>> tokenList)
        {
            return inheritedTypeEntity.cloneInheritedType(inheritedTypeId, title, tokenList);
        }

        public int deleteInheritedComponent(int inheritedTypeId)
        {
            return inheritedTypeEntity.deleteInheritedComponent(inheritedTypeId);
        }

        public List<InheritedTokenDTO> getInheritedTokenList(decimal inheritedTypeId)
        {
            return inheritedTokenEntity.getInheritedTokenList(inheritedTypeId);
        }
    }
}
