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
    public class ProjectController : ApiController
    {
        string exportPath = ConfigurationManager.AppSettings["ExportPath"];

        [Route("api/projectList/{id?}")]
        public IEnumerable<ProjectDTO> Get(decimal userId)
        {
            return BLL.BLUser.getProjectListSummary(userId);
        }

        [Route("api/project/{id?}")]
        public ProjectDTO GetProject(decimal projectId)
        {
            return BLL.BLProject.getProjectDetail(projectId);
        }

        [Route("api/projectPage/{id?}")]
        public List<PageDTO> GetPageList(decimal projectId)
        {
            return BLL.BLProject.getPageList(projectId);
        }



        [Route("api/getPageListDetailed/{id?}")]
        public List<PageDTO> getPageListDetailed(decimal projectId)
        {
            return BLL.BLProject.getPageListDetailed(projectId);
        }

        //[Route("api/projectToken/{id?}")]
        //public List<ContainerTokenDTO> GetProjectTokenList(decimal projectId)
        //{
        //    return BLL.BLProject.getProjectTokenList(projectId);
        //}

        [Route("api/projectToken/{id?}")]
        public List<ContainerTokenDTO> GetProjectTokenDic(decimal projectId)
        {
            return BLL.BLProject.getProjectTotalToken(projectId);
        }


        [Route("api/saveProjectToken/{id?}")]
        [HttpPost]
        public ContainerTokenDTO saveProjectToken(ContainerTokenDTO containerTokenDTO)
        {
            return BLL.BLProject.saveProjectToken(containerTokenDTO);
        }

        [Route("api/savePageToken/{id?}")]
        [HttpPost]
        public ContainerTokenDTO savePageToken(ContainerTokenDTO containerTokenDTO)
        {
            return BLL.BLProject.savePageToken(containerTokenDTO);
        }

        [Route("api/deletePageToken/{id?}")]
        [HttpPost]
        public ContainerTokenDTO deletePageToken(ContainerTokenDTO containerTokenDTO)
        {
            return BLL.BLProject.deletePageToken(containerTokenDTO);
        }

        

        [Route("api/saveWish/{id?}")]
        [HttpPost]
        public decimal saveWish(decimal userId,string title)
        {
            return BLL.BLProject.saveWish(userId,title);
        }


        [Route("api/createNewProject/{id?}")]
        [HttpPost]
        public ProjectDTO createNewProject(ProjectDTO projectDTO)
        {
            return BLL.BLProject.createNewProject(exportPath, projectDTO);
        }


        [Route("api/reCreateResources/{id?}")]
        [HttpPost]
        public int reCreateResources(ProjectDTO projectDTO)
        {
            return BLL.BLProject.reCreateResources(exportPath, projectDTO);
        }

        [Route("api/makeAllDesign/{id?}")]
        [HttpPost]
        public string makeAllDesign(ProjectDTO projectDTO)
        {
            return BLL.BLProject.makeAllDesign(exportPath, projectDTO);
        }



        [Route("api/deleteProject/{id?}")]
        [HttpPost]
        public decimal deleteProject(decimal userId, decimal projectId)
        {
            return BLL.BLProject.deleteProject(userId, projectId,exportPath);
        }



        
    }
}
