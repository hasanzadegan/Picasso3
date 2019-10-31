using Picasso2.Entity;
using Picasso2.DTO;

namespace Picasso2.BLL.BIZ
{
    public class BLCustomComponent
    {
        ComponentEntity componentEntity = new ComponentEntity();
        public void RenderCustomHTML(decimal sourcePageContentId, ComponentDTO componentDTO)
        {

            InheritedTypeDTO inheritedTypeDTO = BLL.BLInheritedType.getInheritedTypeInfo(componentDTO.InheritedTypeId);
            if (inheritedTypeDTO.GenericType.Title=="Table")
            {
                componentDTO.RenderHTML = BLL.BLComponent.createRenderHTML(componentDTO, sourcePageContentId);
                createTable(componentDTO);
            }
            else
            {
                BLL.BLComponent.createRenderHTML(componentDTO, sourcePageContentId);
            }

        }

        private void createTable(ComponentDTO componentDTO)
        {
            string str = componentDTO.InheritedType.GenericType.TokenizeString;
            componentEntity.getInheritedTokenList(componentDTO.InheritedTypeId);
            
            BLL.BLComponent.updateComponentRender(componentDTO);
        }
    }
}
