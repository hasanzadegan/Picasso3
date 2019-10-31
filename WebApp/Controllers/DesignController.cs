using AutoMapper;
using Picasso2.BLL.BIZ;
using Picasso2.DTO;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApp.Controllers
{
    public class DesignController : ApiController
    {
        string exportPath = ConfigurationManager.AppSettings["ExportPath"];

        [Route("api/getDesignList/{id?}")]
        public List<DesignDTO> getDesignList(decimal projectId)
        {
            return BLL.BLDesign.getDesignList(projectId);
        }


        [Route("api/getPanelList/{id?}")]
        public List<PanelDTO> getPanelList(decimal projectId)
        {
            return BLL.BLDashboard.getPanelList(projectId);
        }

        [Route("api/getDashboardList/{id?}")]
        public List<DashboardDTO> getDashboardList(decimal projectId)
        {
            return BLL.BLDashboard.getDashboardList(projectId);
        }

        [Route("api/getBaseUrls/{id?}")]
        public string[] getBaseUrls(decimal projectId)
        {
            return BLL.BLDesign.getBaseUrls(projectId);
        }
        [Route("api/getDesignResultList/{id?}")]
        public List<DesignResultDTO> getDesignResultList(decimal designId)
        {
            return BLL.BLDesign.getDesignResultList(designId);
        }
        

        [Route("api/addDesign/{id?}")]
        [HttpPost]
        public DesignDTO addDesign(decimal projectId, string designDesc)
        {
            return BLL.BLDesign.addDesign(exportPath,projectId, designDesc);
        }

        [Route("api/removeDesign/{id?}")]
        [HttpPost]
        public decimal removeDesign(decimal designId)
        {
            return BLL.BLDesign.removeDesign(exportPath,designId);
        }

        [Route("api/updateDesignPageContent/{id?}")]
        [HttpPost]
        public DesignDTO updateDesignPageContent(decimal designId, decimal destPageContentId)
        {
            return BLL.BLDesign.updateDesignPageContent(designId, destPageContentId);
        }

        [Route("api/SaveRenderJs/{id?}")]
        [HttpPost]
        public string SaveRenderJs(DesignDTO designDTO)
        {
            return BLL.BLDesign.RenderJSAndSave(exportPath,designDTO);
        }

        [Route("api/addDesignResult/{id?}")]
        [HttpPost]
        public Object addDesignResult(DesignDTO designDTO)
        {
            if (designDTO.isMulipledest == 1)
            {
                BLL.BLDesign.addDesignResult(exportPath, designDTO);
            }
            else
            {
                designDTO = BLL.BLDesign.updateDesignDest(exportPath, designDTO);
            }

            designDTO.RenderJS = BLL.BLDesign.CreateRenderJSStr(designDTO);

            BLL.BLDesign.SaveRenderJs(designDTO);
            BLL.BLDesign.RenderJSAndSave(exportPath, designDTO);
            return designDTO;
            //designResultDTO.DesignId.Value,designResultDTO.DestPageContentId, designResultDTO.DestDesignId, designResultDTO.ResultCase);
            //return BLL.BLDesign.addDesignResult(exportPath, designId, destPageContentId, destDesignId, resultCase);
        }



        [Route("api/loadDesign/{id?}")]
        [HttpPost]
        public DesignDTO loadDesign(decimal sourcePageContentId,decimal designId)
        {
            return BLL.BLDesign.loadDesign(sourcePageContentId, designId);
        }

        [Route("api/changeComponentDesign/{id?}")]
        [HttpPost]
        public ComponentDTO changeComponentDesign(decimal sourcePageContentId, decimal componentId, decimal designId)
        {
            return BLL.BLDesign.changeComponentDesign(sourcePageContentId, componentId, designId);
        }

        [Route("api/saveDesignJS/{id?}")]
        [HttpPost]
        public DesignDTO saveDesignJS(DesignDTO designDTO)
        {
            DesignDTO designDTO1 =  BLL.BLDesign.saveDesignJS(exportPath,designDTO.DesignId, designDTO.RenderJS);
            return designDTO1;
        }


        [Route("api/changeDestType/{id?}")]
        [HttpPost]
        public DesignDTO changeDestType(decimal designId, decimal isMulipledest)
        {
            return BLL.BLDesign.changeDestType(exportPath,designId, isMulipledest);
        }

        [Route("api/changeDesignDesc/{id?}")]
        [HttpPost]
        public DesignDTO changeDesignDesc(decimal designId, string designDesc)
        {
            return BLL.BLDesign.changeDesignDesc(exportPath,designId, designDesc);
        }

        [Route("api/unlinkDesign/{id?}")]
        [HttpPost]
        public int unlinkDesign(decimal componentId)
        {
            return BLL.BLDesign.unlinkDesign(componentId);
        }


        [Route("api/removeDesignResult/{id?}")]
        [HttpPost]
        public DesignDTO removeDesignResult(decimal designResultId)
        {
            DesignResultDTO designResultDTO = BLL.BLDesign.getDesignResult(designResultId);

            decimal id = BLL.BLDesign.removeDesignResult(designResultId);

            //todo make better
            DesignDTO designDTO = BLL.BLDesign.getDesign(designResultDTO.DesignId.Value);
            designDTO.RenderJS = BLL.BLDesign.CreateRenderJSStr(designDTO);
            BLL.BLDesign.SaveRenderJs(designDTO);
            BLL.BLDesign.RenderJSAndSave(exportPath, designDTO);

            return designDTO;
        }


        [Route("api/updateDesignResult/{id?}")]
        [HttpPost]
        public DesignResultDTO updateDesignResult(DesignResultDTO designResultDTO)
        {
            designResultDTO = BLL.BLDesign.updateDesignResult(designResultDTO);
            DesignDTO designDTO = BLL.BLDesign.getDesign(designResultDTO.DesignId.Value);
            designDTO.RenderJS = BLL.BLDesign.CreateRenderJSStr(designDTO);
            BLL.BLDesign.SaveRenderJs(designDTO);
            BLL.BLDesign.RenderJSAndSave(exportPath, designDTO);
            return designResultDTO;
        }

        [Route("api/addComponentDesign/{id?}")]
        [HttpPost]
        public NavigationDTO addComponentDesign(decimal designId,decimal componetId,decimal SourcePageContentId)
        {
            return BLL.BLDesign.addComponentDesign(designId,componetId,SourcePageContentId);
        }


        [Route("api/getComponentNavigation/{id?}")]
        public DesignDTO getComponentNavigation(decimal componentId, decimal SourcePageContentId)
        {
            return BLL.BLDesign.getComponentNavigation(componentId, SourcePageContentId);
        }
    }
}