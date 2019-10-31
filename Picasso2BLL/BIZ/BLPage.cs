using System.Collections.Generic;
using System.Linq;
using Picasso2.Entity;
using Picasso2.DTO;
using System;

namespace Picasso2.BLL.BIZ
{
    public class BLPage
    {
        PageEntity pageEntity = new PageEntity();
        ContentEntity contentEntity = new ContentEntity();
        public List<ContainerTypeDTO> getContainerTypeList()
        {
            return pageEntity.getContainerTypeList();
        }
        public List<ContainerTokenDTO> getPageTokenList(decimal projectId, decimal pageId)
        {
            return pageEntity.getPageTokenList(projectId, pageId);
        }
        public ContainerTypeDTO getContainerType(decimal pageId)
        {
            return pageEntity.getContainerType(pageId);
        }
        public List<ContentDTO> getPageContentList(decimal pageId)
        {
            return pageEntity.getPageContentList(pageId);
        }

        public void SetPath(string exportPath, ContentDTO contentDTO)
        {
            pageEntity.SetPath(contentDTO);
        }

        public void changeOrderInPage(decimal pageContentId, decimal orderInPage)
        {
            pageEntity.changeOrderInPage(pageContentId, orderInPage);
        }
        public List<ContentDTO> getProjectContentList(decimal projectId)
        {
            return pageEntity.getProjectContentList(projectId);
        }

        public decimal addPageContent(decimal pageId, decimal contentId)
        {
            return pageEntity.addPageContent(pageId, contentId);
        }
        
        public int removePageContent(decimal pageContentId)
        {
            return pageEntity.removePageContent(pageContentId);
        }

        public List<ContainerTokenDTO> getPageTotalTokenList(decimal projectId, decimal pageId)
        {
            List<ContainerTokenDTO> projectTokenDTOList  = BLL.BLProject.getProjectTotalToken(projectId);
            List<ContainerTokenDTO> pageTokenDTOList = pageEntity.getPageOnlyTokenList(projectId, pageId);

            foreach (ContainerTokenDTO projectTokenDTO in projectTokenDTOList)
            {
                var pageToken = pageTokenDTOList.Where(w => w.TokenName == projectTokenDTO.TokenName).ToList();
                if (pageToken.Count > 0)
                {
                    projectTokenDTO.TokenValue = pageToken.Last().TokenValue;
                    projectTokenDTO.ProjectId = pageToken.Last().ProjectId;
                    projectTokenDTO.ContainerTokenId = pageToken.Last().ContainerTokenId;
                    projectTokenDTO.overrided = true;
                }
            }
            return projectTokenDTOList;
        }

        public void removePageTokenList(decimal pageId)
        {

        }

        public string getPageToken(decimal projectId, decimal pageId, string tokenName)
        {
            return pageEntity.getPageToken(projectId,pageId, tokenName);
        }

        public PageDTO getPageInfo(decimal pageId)
        {
            return pageEntity.getPageInfo(pageId);
        }
    }
}
