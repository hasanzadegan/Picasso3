using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Picasso2.BLL.BIZ;
using Picasso2.DTO;
using AutoMapper;
using System.Configuration;

namespace WebApp.Controllers
{
    public class PageController : ApiController
    {
        string exportPath = ConfigurationManager.AppSettings["ExportPath"];

        [Route("api/addNewPage/{id?}")]
        [HttpPost]
        public int addNewPage(decimal projectId)
        {
            return BLL.BLProject.addNewPage(projectId);
        }

        [Route("api/setPath/{id?}")]
        [HttpPost]
        public void SetPath(ContentDTO contentDTO)
        {
            if(contentDTO.PageContentId>0)
                BLL.BLContent.SetPath(exportPath,contentDTO);
            else
                BLL.BLPage.SetPath(exportPath,contentDTO);

        }




        [Route("api/updatePageInfo/{id?}")]
        [HttpPost]
        public int updatePageInfo(decimal pageId,string pageName,decimal containerTypeId)
        {
            return BLL.BLProject.updatePageInfo(pageId,pageName,containerTypeId);
        }

        [Route("api/deletePage/{id?}")]
        [HttpPost]
        public int deletePage(decimal pageId)
        {
            return BLL.BLProject.deletePage(pageId);
        }

        [Route("api/pageToken/{id?}")]
        public List<ContainerTokenDTO> GetPageTotalTokenList(decimal projectId, decimal pageId)
        {
            return BLL.BLPage.getPageTotalTokenList(projectId, pageId);
        }
    }
}
