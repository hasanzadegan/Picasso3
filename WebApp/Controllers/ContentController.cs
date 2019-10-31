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
    public class ContentController : ApiController
    {
        [Route("api/projectContent/{id?}")]
        public List<ContentDTO> GetProjectContentList(decimal projectId)
        {
            return BLL.BLProject.getProjectContentList(projectId);
        }

        [Route("api/pageContent/{id?}")]
        public List<ContentDTO> GetPageContentList(decimal pageId)
        {
            return BLL.BLPage.getPageContentList(pageId);
        }

        [Route("api/addContent/{id?}")]
        [HttpPost]
        public List<ContentDTO> addPageContent(decimal pageId, decimal contentId)
        {
            BLL.BLPage.addPageContent(pageId, contentId);
            return BLL.BLPage.getPageContentList(pageId);
        }


        [Route("api/changeOrderInPage/{id?}")]
        [HttpPost]
        public void changeOrderInPage(decimal pageContentId, decimal orderInPage)
        {
            BLL.BLPage.changeOrderInPage(pageContentId, orderInPage);
        }

        [Route("api/createContent/{id?}")]
        [HttpGet]
        public List<ContentDTO> createContent(int projectId,string contentName)
        {
            BLL.BLContent.createContent(projectId, contentName);
            return BLL.BLProject.getProjectContentList(projectId);
        }

        [Route("api/removeContent/{id?}")]
        [HttpGet]
        public List<ContentDTO> removePageContent(decimal pageContentId, decimal pageId)
        {
            BLL.BLPage.removePageContent(pageContentId);
            return BLL.BLPage.getPageContentList(pageId);
        }

        [Route("api/removeProjectContent/{id?}")]
        [HttpPost]
        public decimal removeProjectContent(decimal contentId)
        {
            return BLL.BLContent.deleteContent(contentId);
        }

        [Route("api/saveContentInfo/{id?}")]
        [HttpPost]
        public IHttpActionResult SaveContentInfo([FromBody] ContentDTO contentDTO)
        {
            BLL.BLContent.saveContentInfo(contentDTO);
            return Ok();
        }

        [Route("api/savePageContentInfo/{id?}")]
        [HttpPost]
        public ContentDTO SavePageContentInfo(ContentDTO contentDTO)
        {
            return BLL.BLPageContent.SavePageContentInfo(contentDTO);
        }

        [Route("api/paste/{id?}")]
        [HttpPost]
        public ContentDTO paste(ContentDTO contentDTO)
        {
            return BLL.BLPageContent.paste(contentDTO, contentDTO.PageId);
        }

    }
}
