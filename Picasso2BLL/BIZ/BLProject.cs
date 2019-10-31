using System.Collections.Generic;
using System.Linq;
using Picasso2.Entity;
using Picasso2.DTO;
using Picasso2.BLL.Kernel;
using System;

namespace Picasso2.BLL.BIZ
{
    public class BLProject
    {
        ProjectEntity projectEntity = new ProjectEntity();
        PageEntity pageEntity = new PageEntity();
        public List<PageDTO> getPageList(decimal projectId)
        {
            return projectEntity.getPageList(projectId);
        }
        
        public string getProjectToken(decimal projctId,string tokenName)
        {
            return projectEntity.getProjectToken(projctId,tokenName);
        }
        public List<PageDTO> getPageListDetailed(decimal projectId)
        {
            return projectEntity.getPageListDetailed(projectId);
        }

        public List<ContainerTokenDTO> getProjectTotalToken(decimal projectId)
        {
            Dictionary<string, string> projectTokenDic = new Dictionary<string, string>();

            string TokenizeString = projectEntity.getProjectTemplateType(projectId);
            List<string> placeHolderList = Parser.getPlaceHolderList(TokenizeString, Constant.pattern);


            List<ContainerTokenDTO> projectTokenList1 = new List<ContainerTokenDTO>();
            foreach (string placeHolder in placeHolderList)
            {
                ContainerTokenDTO containerTokenDTO = new ContainerTokenDTO();
                string placeHolder1 = placeHolder.Replace("<<<", "");
                placeHolder1 = placeHolder1.Replace(">>>", "");

                if (!projectTokenDic.Keys.Contains(placeHolder1))
                {
                    projectTokenDic.Add(placeHolder1, "");
                    containerTokenDTO.TokenName = placeHolder1;
                    projectTokenList1.Add(containerTokenDTO);
                }
            }

            List<ContainerTokenDTO> projectTokenList = projectEntity.getProjectTokenList(projectId);
            foreach (ContainerTokenDTO containerTokenDTO in projectTokenList)
            {
                if(projectTokenDic.Keys.Contains(containerTokenDTO.TokenName))
                {
                    projectTokenDic[containerTokenDTO.TokenName] = containerTokenDTO.TokenValue;
                    var items = projectTokenList1.Where(w => w.TokenName == containerTokenDTO.TokenName).ToList();
                    if (items.Count > 0)
                    {
                        items.First().TokenValue = containerTokenDTO.TokenValue;
                        items.First().ContainerTokenId = containerTokenDTO.ContainerTokenId;
                    }
                }
            }

            return projectTokenList1;
        }

        public ContainerTokenDTO deletePageToken(ContainerTokenDTO containerTokenDTO)
        {
            return projectEntity.deletePageToken(containerTokenDTO);
        }

        public decimal saveWish(decimal userId,string title)
        {
            return projectEntity.saveWish(userId,title);
        }

        public ProjectDTO createNewProject(string exportPath,ProjectDTO projectDTO)
        {
            return projectEntity.createNewProject(exportPath,projectDTO);
        }

        public string makeAllDesign(string exportPath, ProjectDTO projectDTO)
        {
            int cnt = 0;
            List<DesignDTO> designList = BLL.BLDesign.getDesignList(projectDTO.ProjectId);
            string str = "";
            foreach (DesignDTO designDto in designList)
            {
                string renderJs = BLL.BLDesign.CreateRenderJSStr(designDto);
                BLL.BLDesign.saveDesignJS(exportPath, designDto.DesignId, renderJs);
                str += designDto.DesignId + ",";
                cnt++;
            }

            return "design:"+cnt;
        }

        public int reCreateResources(string exportPath, ProjectDTO projectDTO)
        {
            return projectEntity.reCreateResources(exportPath,projectDTO);
        }
        public decimal deleteProject(decimal userId, decimal projectId,string exportPath)
        {
            return projectEntity.deleteProject(userId,projectId, exportPath);
        }

        public ContainerTokenDTO saveProjectToken(ContainerTokenDTO containerTokenDTO)
        {
            return projectEntity.saveProjectToken(containerTokenDTO);
        }
        public ContainerTokenDTO savePageToken(ContainerTokenDTO containerTokenDTO)
        {
            return projectEntity.savePageToken(containerTokenDTO);
        }

        public List<ContainerTokenDTO> getProjectTokenList(decimal projectId)
        {
            return projectEntity.getProjectTokenList(projectId); 
        }
        public List<InheritedTypeDTO> getInheritedTypeList(decimal projectId)
        {
            return projectEntity.getInheritedTypeList(projectId);
        }

        public int updatePageInfo(decimal pageId, string pageName, decimal containerTypeId)
        {
            return pageEntity.updatePageInfo(pageId,pageName,containerTypeId);
        }

        public List<LayoutDTO> getLayoutList(decimal projectId)
        {
            return projectEntity.getLayoutList(projectId);
        }

        public ProjectDTO getProjectInfo(decimal projectId)
        {
            return projectEntity.getProjectInfo(projectId);
        }

        public TemplateDTO getTemplate(decimal projectId)
        {
            return projectEntity.getTemplate(projectId);
        }
        public List<ContentDTO> getProjectContentList(decimal projectId)
        {
            return projectEntity.getProjectContentList(projectId);
        }
        public int addNewPage(decimal projectId)
        {
            return projectEntity.addNewPage(projectId);
        }

        public int deletePage(decimal pageId)
        {
            return projectEntity.deletePage(pageId);
        }

        public ProjectDTO getProjectDetail(decimal projectId)
        {
            ProjectDTO projectDTO = new ProjectDTO();
            projectDTO.pageList = getPageList(projectId); ;
            projectDTO.layoutList = getLayoutList(projectId); ;
            projectDTO.inheritedTypeList = getInheritedTypeList(projectId); ;
            projectDTO.contentList = getProjectContentList(projectId);
            projectDTO.containerTokenList = getProjectTokenList(projectId);
            return projectDTO;
        }
    }
}
