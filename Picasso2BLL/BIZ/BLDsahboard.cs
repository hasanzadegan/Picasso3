using System.Collections.Generic;
using Picasso2.Entity;
using Picasso2.DTO;
using Picasso2.BLL.Kernel;
using System;

namespace Picasso2.BLL.BIZ
{
    public class BLDashboard
    {
        DashboardEntity dashboardEntity = new DashboardEntity();
        public List<DashboardDTO> getDashboardList(decimal projectId)
        {
            return dashboardEntity.getDashboardList(projectId);
        }
        public List<PanelDTO> getPanelList(decimal projectId) {
            return dashboardEntity.getPanelList(projectId);
        }

        public string getDashbordJsString(decimal projectId)
        {
            string str = "";
            List<DashboardDTO> dashboardDTOs = getDashboardList(projectId);
            List<PanelDTO> panelDTOs = getPanelList(projectId);
            str += "\t// dashboards \n";
            foreach (DashboardDTO dashboardDTO in dashboardDTOs)
            {
                str += "\t$rootScope.dashboardParam[\""+dashboardDTO.Title+"\"]="+dashboardDTO.DashboardSetting+";\n";
            }

            str += "\n\t// panels \n";
            foreach (PanelDTO panelDTO in panelDTOs)
            {
                str += "\t$rootScope.panels[\"" + panelDTO.Title+"\"]="+panelDTO.PanelSetting+";\n";
            }

            string dashboardTemplate = BLL.BLTemplateType.getTypeByName("dashboard.js").TokenizeString;
            dashboardTemplate = dashboardTemplate.Replace("<<<Project.Dashborads>>>", str);
            return dashboardTemplate;
        }

        public string getPartJsString()
        {
            string partTemplate = BLL.BLTemplateType.getTypeByName("part.js").TokenizeString;
            return partTemplate;
        }

        public string getPartHTMLString()
        {
            string partTemplate = BLL.BLTemplateType.getTypeByName("part.html").TokenizeString;
            return partTemplate;
        }
    }
}
