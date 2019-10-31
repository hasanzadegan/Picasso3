using Picasso2.BLL.BIZ;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApp.Controllers
{
    public class GeneratorController : ApiController
    {
        string exportPath = ConfigurationManager.AppSettings["ExportPath"];


        [Route("api/generatePageContent/{id?}")]
        public string getProjectContentList(decimal pageContentid)
        {
            return BLL.BLGenerator.generatePageContent(exportPath,pageContentid);
        }

        [Route("api/generateAll/{id ?}")]
        public string generateAll(decimal projectId)
        {
            return BLL.BLGenerator.generateAll(exportPath, projectId);
        }


        [Route("api/savePageAndContents/{id ?}")]
        public int savePageAndContents(decimal pageId)
        {
            return BLL.BLGenerator.savePageAndContents(exportPath ,pageId,0);
        }



        [Route("api/generateProjectZip/{id?}")]
        public string generateProjectZip(decimal projectId)
        {
            return BLL.BLGenerator.GenerateProjectZip(exportPath,projectId);
        }
    }
}
