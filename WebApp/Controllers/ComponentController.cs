using Picasso2.BLL.BIZ;
using Picasso2.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApp.Controllers
{
    public class ComponentController : ApiController
    {

        [Route("api/getInheritedTypeList/{id?}")]
        public List<InheritedTypeDTO> getInheritedTypeList()
        {
            return BLL.BLInheritedType.getInheritedTypeList();
        }

        [Route("api/createRenderHTML/{id?}")]
        public string createRenderHTML(ComponentDTO componentDTO)
        {
            return BLL.BLComponent.createRenderHTML(componentDTO, componentDTO.SourcePageContentId);
        }

        [Route("api/componentController/{id?}")]
        public ComponentDTO getProjectContentList(decimal contentId, decimal inheritedTypeId, string tileName, string eventName, string eventFunction)
        {
            return BLL.BLComponent.saveComponent(contentId,inheritedTypeId,tileName,eventName,eventFunction);
        }
  
        [Route("api/searchComponentList/{id?}")]
        [HttpGet]
        public List<InheritedTypeDTO> searchComponentList(decimal projectId, string search)
        {
            return BLL.BLComponent.searchComponentList(projectId, search);
        }

        [Route("api/addComponent/{id?}")]
        [HttpGet]
        public ComponentDTO addComponent(decimal contentId, decimal inheritedTypeId, string tileName, string eventName, string eventFunction)
        {
            return BLL.BLComponent.saveComponent(contentId, inheritedTypeId,tileName, eventName, eventFunction);
        }

        [Route("api/deleteComponent/{id?}")]
        [HttpPost]
        public ComponentDTO deleteComponent(ComponentDTO componentDTO)
        {
            return BLL.BLComponent.deleteComponent(componentDTO);
        }

        [Route("api/changeComponentHTML/{id?}")]
        [HttpPost]
        public ComponentDTO changeComponentHTML(ComponentDTO componentDTO)
        {
            return BLL.BLComponent.changeComponentHTML(componentDTO);
        }

        [Route("api/changeComponentName/{id?}")]
        [HttpPost]
        public ComponentDTO changeComponentName(decimal componentId, string newName)
        {
            return BLL.BLComponent.changeComponentName(componentId, newName);
        }

        [Route("api/deleteInheritedType/{id?}")]
        [HttpPost]
        public decimal deleteInheritedType(ComponentDTO componentDTO)
        {
            return BLL.BLComponent.deleteInheritedType(componentDTO);
        }

        [Route("api/componentTokenList/{id?}")]
        [HttpGet]
        public List<ComponentTokenDTO> componentTokenList(decimal componentId, decimal projectId, decimal pageId)
        {
            return BLL.BLComponent.getComponentTotalTokenList(componentId, projectId, pageId);
        }


        [Route("api/swapComponent/{id?}")]
        [HttpPost]
        public int swapComponent(string tileName,decimal componentId, decimal orderInTile)
        {
            return BLL.BLComponent.swapComponent(tileName, componentId, orderInTile);
        }

        [Route("api/updateComponentInfo/{id?}")]
        [HttpPost]
        public ComponentDTO updateComponentInfo(ComponentDTO componentDTO)
        {
            return BLL.BLComponent.updateComponentInfo(componentDTO);
        }

        [Route("api/saveCmpToken/{id?}")]
        [HttpPost]
        public ComponentTokenDTO saveComponentToken(ComponentTokenDTO componentTokenDTO)
        {
            ComponentTokenDTO componentTokenDTO1 = BLL.BLComponent.saveComponentToken(componentTokenDTO);

            ComponentDTO componentDTO = BLL.BLComponent.getComponentInfo(componentTokenDTO.ComponentId.Value);
            BLL.BLCustomComponent.RenderCustomHTML(componentTokenDTO.sourcePageContentId, componentDTO);

            return componentTokenDTO1;
        }

        [Route("api/cloneComponent/{id?}")]
        [HttpPost]
        public ComponentDTO cloneComponent(ComponentDTO componentDTO)
        {
            return BLL.BLComponent.cloneComponent(componentDTO);
        }

        [Route("api/deleteComponentToken/{id?}")]
        [HttpPost]
        public ComponentTokenDTO deleteComponentToken(ComponentTokenDTO componentTokenDTO)
        {
            return BLL.BLComponent.deleteComponentToken(componentTokenDTO);
        }

    }
}
