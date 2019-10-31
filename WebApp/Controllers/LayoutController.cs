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
    public class LayoutController : ApiController
    {

        [Route("api/layoutList/{id?}")]
        public List<LayoutDTO> GetLayoutList(decimal projectId)
        {
            return BLL.BLLayout.getLayoutList(projectId);
        }

        [Route("api/layout/{id?}")]
        public LayoutDTO GetLayout(decimal contentId, decimal layoutId)
        {
            return BLL.BLLayout.getSmallLayoutInfo(contentId, layoutId);
        }

        [Route("api/layoutHTML/{id?}")]
        public LayoutDTO GetLayoutHTML(decimal pageContentId, decimal layoutId)
        {
            return BLL.BLLayout.getLayoutWithHTML(pageContentId, layoutId);
        }

        [Route("api/componentList/{id?}")]
        public List<ComponentDTO> getComponentList(decimal contentId, string tileName)
        {
            return BLL.BLComponent.getComponentList(contentId, tileName);
        }

        [Route("api/tileList/{id?}")]
        public List<TileDTO> getTileList(decimal layoutId,decimal pageContentId)
        {
            return BLL.BLLayout.getTileList(layoutId, pageContentId);
        }


        [Route("api/moveComponent/{id?}")]
        [HttpPost]
        public List<TileDTO> moveComponent(decimal layoutId, decimal contentId, decimal componentId, string destTileName)
        {
            return BLL.BLLayout.moveComponentTile(layoutId,contentId,componentId, destTileName);
        }


        [Route("api/containerTypeList/{id?}")]
        [HttpGet]
        public List<ContainerTypeDTO> containerTypeList()
        {
            return BLL.BLContainerType.getContainerTypeList();
        }
    }
}
