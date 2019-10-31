using System.Collections.Generic;
using Picasso2.Entity;
using Picasso2.DTO;
using System;
using System.IO;

namespace Picasso2.BLL.BIZ
{
    public class BLDesign
    {
        DesignEntity designEntity = new DesignEntity();

        //public List<DesignDTO> getDesignList(decimal projectId, decimal pageId)
        //{
        //    return designEntity.getDesignList(projectId, pageId);
        //}
        public List<DesignDTO> getDesignList(decimal projectId)
        {
            return designEntity.getDesignList(projectId);
        }
        public List<DesignResultDTO> getDesignResultList(decimal designId)
        {
            return designEntity.getDesignResultList(designId);
        }

        public string[] getBaseUrls(decimal projectId)
        {
            return BLL.BLProject.getProjectToken(projectId, "BaseUrls").Split(';');
        }

        public DesignDTO addDesign(string exportPath, decimal projectId, string designDesc)
        {
            DesignDTO designDTO = designEntity.addDesign(projectId, designDesc);
            return designDTO;
        }

        public NavigationDTO addComponentDesign(decimal designId, decimal componetId, decimal SourcePageContentId)
        {
            return designEntity.addComponentDesign(designId, componetId, SourcePageContentId);
        }

        public decimal removeDesignResult(decimal designResultId)
        {
            return designEntity.removeDesignResult(designResultId);
        }


        public DesignResultDTO updateDesignResult(DesignResultDTO designResultDTO)
        {

            return designEntity.updateDesignResult(designResultDTO);
        }



        //public DesignResultDTO addDesignResult(string exportPath,DesignResultDTO designResultDTO)
        //    //decimal designId, decimal? destPageContentId, decimal? destDesignId, string resultCase)
        //{
        //    return designEntity.addDesignResult(designResultDTO);//designId, destPageContentId, destDesignId, resultCase);

        //}

        public DesignDTO updateDesignDest(string exportPath, DesignDTO designDTO)
        //decimal designId, decimal? destPageContentId, decimal? destDesignId, string resultCase)
        {
            return designEntity.updateDesignDest(designDTO);//designId, destPageContentId, destDesignId, resultCase);

        }

        public string RenderJSAndSave(string exportPath,DesignDTO designDTO)
        {
            string renderJSStr = CreateRenderJSStr(designDTO);
            SaveRenderJs(designDTO);
            SaveDesignFile(exportPath,designDTO.DesignId, renderJSStr);
            return renderJSStr;
        }

        private void SaveDesignFile(string exportPath, decimal designId, string renderJSStr)
        {
            string path = createProjectPath(exportPath, designId);
            string designStatement = BLL.BLDesign.createDesignStatement(designId,renderJSStr);
            BLL.BLGenerator.saveFile(path, "design" + designId + ".js", designStatement);
        }

        public void savePageContentDesigns(string exportPath,ProjectDTO projectDTO, decimal pageContentId)
        {
            List<DesignDTO> designDTOs =  getDesignListForPageContent(pageContentId);
            foreach (DesignDTO designDTO in designDTOs)
            {
                SaveDesignFile(exportPath, designDTO.DesignId, designDTO.RenderJS);
            }
        }

        public object addDesignResult(string exportPath, DesignDTO designDTO)
        {
            designDTO.RenderJS = RenderJSAndSave(exportPath, designDTO);
            return designEntity.addDesignResult(designDTO);
        }

        public DesignDTO saveDesignJS(string exportPath,decimal designId, string renderJS)
        {
            SaveDesignFile(exportPath, designId, renderJS);
            return designEntity.saveDesignJS(designId,renderJS);
        }

        public string CreateRenderJSStr(DesignDTO designDTO)
        {
            // todo template base
            string RenderJSStr = "";
            RenderJSStr += "\n"+"////////////////// code for action : "+designDTO.DesignDesc+" \n";

            string methodType = "'" + designDTO.MethodType + "'";
            //RenderJSStr += "var obj        = " + (designDTO.ReturnObject == "" || designDTO.ReturnObject == null ? "null" : designDTO.ReturnObject) + ";\n";
            RenderJSStr += "\n$rootScope.design_"+designDTO.DesignId + " = function($scope,param,$event){\n";
            string param = (designDTO.ActionParameter == "" || designDTO.ActionParameter == null ? "null" : designDTO.ActionParameter);

            RenderJSStr += "\t" + (designDTO.BeforeCallback==null?"": designDTO.BeforeCallback.Replace("\n", "\n\t")) + "\n";

            string urlStr = "";
            try
            {
                var baseUrlStrs = BLL.BLProject.getProjectToken(designDTO.ProjectId.Value, "BaseUrls").Split(';');
                urlStr = baseUrlStrs.GetValue(int.Parse(designDTO.BaseUrlId.ToString())).ToString();
            }
            catch (Exception)
            {
            }

            if (urlStr!="")
            {
                RenderJSStr += "\t// " + urlStr+designDTO.ActionUrl + "\n";
                RenderJSStr += "\turl= $rootScope.BaseUrls[" + designDTO.BaseUrlId +"]+'"+ designDTO.ActionUrl + "';\n";
                RenderJSStr += "\t$scope.callBack_" + designDTO.DesignId + " = function(data){\n";
                //RenderJSStr += "\t\t$rootScope.__Message = data.mdc_error_msg;\n";
                if (designDTO.ReturnStorage != "" && designDTO.ReturnStorage!=null)
                    RenderJSStr += "\t\tlocalStorage.setItem(\"__localStorage." + designDTO.ReturnStorage + "\", JSON.stringify(data)); \n";
                if (designDTO.ReturnObject != "" && designDTO.ReturnObject != null)
                    RenderJSStr += "\t\t$scope.$eval(\"" + designDTO.ReturnObject + "=\" + JSON.stringify(data)) \n";
                if (designDTO.InnerCallback != "" && designDTO.InnerCallback != null)
                    RenderJSStr += "\t\t" + designDTO.InnerCallback.Replace("\n", "\n\t\t") + "\n";
                if (designDTO.isMulipledest > -1)
                    RenderJSStr += "\t" + createStatemanet(designDTO, 1);
                RenderJSStr += "}\n";
                RenderJSStr += "\t$rootScope.sendData($scope,url," + param + "," + methodType + ",'callBack_" + designDTO.DesignId + "');\n";
            }
            else
                if (designDTO.isMulipledest > -1)
                    RenderJSStr += "\t" + createStatemanet(designDTO, 1);
            RenderJSStr += "};\n\n";
          
            return RenderJSStr;
        }

        public DesignResultDTO getDesignResult(decimal designResultId)
        {
            return designEntity.getDesignResult(designResultId);
        }

        public int SaveRenderJs(DesignDTO designDTO)
        {
            return designEntity.SaveRenderJs(designDTO);
        }

        public ComponentDTO changeComponentDesign(decimal sourcePageContentId, decimal componentId, decimal designId)
        {
            DesignDTO designDTO= designEntity.changeComponentDesign(sourcePageContentId, componentId, designId);
            ComponentDTO componentDTO = BLL.BLComponent.getComponentInfo(componentId);
            componentDTO.RenderHTML = "";
            componentDTO.Design = designDTO;
            componentDTO.RenderHTML = BLL.BLComponent.renderComponent(componentDTO, sourcePageContentId);
            return componentDTO;
        }

        public DesignDTO loadDesign(decimal sourcePageContentId, decimal designId)
        {
            return designEntity.loadDesign(sourcePageContentId, designId);
        }

        private string createProjectPath(string exportPath, decimal designId)
        {
            DesignDTO designDTO = BLL.BLDesign.getDesign(designId);
            ProjectDTO projectDTO = BLL.BLProject.getProjectInfo(designDTO.ProjectId.Value);
            string path = exportPath + "/" + projectDTO.OwnerUserId + "/" + projectDTO.ProjectId + "/Design";
            return path;
        }
        public DesignDTO updateDesignPageContent(decimal designId, decimal destPageContentId)
        {
            return designEntity.updateDesignPageContent(designId, destPageContentId);
        }

        public string createDesignStatement(decimal designId,string renderJSStr)
        {
            DesignDTO designDTO = getDesign(designId);

            //todo template base
            string str = "";
            // todo replace app with suitable tag
            string appName = BLL.BLProject.getProjectToken(designDTO.ProjectId.Value, "Page.AppName");
            str += "angular.module(\""+ appName + "\").controller(\"Design_" + designId + "\", " +
                "['$rootScope', '$scope', '$http', '$q', '$filter',"+
                "function($rootScope,$scope, $http,$q, $filter){ \n";
            str += renderJSStr +"\n";
            str += "\n} \n";
            str += "]);";
            return str;
        }

        public decimal removeDesign(string exportPath, decimal designId)
        {
            string path = createProjectPath(exportPath, designId);
            if (File.Exists(path + "/design" + designId + ".js"))
            {
                File.Delete(path + "/design" + designId + ".js");
            }
            return designEntity.removeDesign(designId);
        }

        public DesignDTO changeDesignDesc(string exportPath, decimal designId, string designDesc)
        {
            DesignDTO designDTO = getDesign(designId);
            string path = createProjectPath(exportPath, designId);
            string designStatement = BLL.BLDesign.createDesignStatement(designId,designDTO.RenderJS);
            BLL.BLGenerator.saveFile(path, "design" + designId + ".js", designStatement);

            return designEntity.changeDesignDesc(designId, designDesc);
        }

        public int unlinkDesign(decimal componentId)
        {
            return designEntity.unlinkDesign(componentId);
        }

        public DesignDTO changeDestType(string exportPath,decimal designId, decimal isMulipledest)
        {
            DesignDTO designDTO =  designEntity.changeDestType(designId, isMulipledest);
            designDTO.isMulipledest = isMulipledest;
            string renderJsStr = BLL.BLDesign.CreateRenderJSStr(designDTO);
            designDTO.RenderJS = renderJsStr;
            BLL.BLDesign.SaveRenderJs(designDTO);
            RenderJSAndSave(exportPath, designDTO);
            return designDTO;
        }

        public DesignDTO getComponentNavigation(decimal componentId, decimal sourcePageContentId)
        {
            return designEntity.getComponentNavigation(componentId, sourcePageContentId);
        }

        public List<DesignDTO> getDesignListForPageContent(decimal pageContentId) {
            return designEntity.getDesignListForPageContent(pageContentId);
        }


        public string getDesignFunctionsForPageContent(decimal pageContentId)
        {
            string str = "";
            str = "$scope.pageContentId = " + pageContentId + "; \n";
            List<DesignDTO> designList = designEntity.getDesignListForPageContent(pageContentId);
            foreach (DesignDTO design in designList)
            {
                str += "// " + design.DesignDesc + " \n";
                str += "$rootScope.design_" + design.DesignId + " = function(){";
                str += createStatemanet(design, 1);
                str += "\n} \n";
            }
            return str;
        }


        private string createStatemanet(DesignDTO design, decimal level)
        {
            string str = "";
            string tabs = "";
            for (int i = 0; i < level; i++)
            {
                tabs += "\t";
            }
            level++;

            if (design.isMulipledest == 0)
            {
                if (design.PageContentId > 0)
                {
                    decimal pageId = BLL.BLPageContent.getPage(design.PageContentId.Value).PageId;
                    str = "\n \t\t// Navigate : " + design.PageContentDesc + "\n";
                    str += "\t" + "$scope.navigateULR(" + pageId + "," + design.PageContentId + ");\n";
                }
            }
            else
            {
                List<DesignResultDTO> designResultList = BLL.BLDesign.getDesignResultList(design.DesignId);
                foreach (DesignResultDTO designResult in designResultList)
                {
                    str += "\n" + tabs+"\t";
                    str += "if(" + designResult.ResultCase + "){";
                    if (designResult.ResultMessage != "" && designResult.ResultMessage!=null)
                    {
                        str += "\n \t\t\t$rootScope.__toastMessage = $filter('translate')(" + designResult.ResultMessage+");";
                    }

                    if (designResult.DestDesignId != null)
                    {
                        DesignDTO destDesign = BLL.BLDesign.getDesign(designResult.DestDesignId.Value);
                        //str += "\n \t" + createStatemanet(destDesign, level);
                        str += "\n \t\t\t// Design : " + getDesign(designResult.DestDesignId.Value).DesignDesc;
                        str += "\n \t\t\t$rootScope.design_" + designResult.DestDesignId + "($scope);";
                    }
                    else if (designResult.DestPageContentId != null)
                    {
                        decimal destPageId = BLL.BLPageContent.getPage(designResult.DestPageContentId.Value).PageId;
                        str += "\n \t\t\t// Navigate : " + designResult.DestDesc;
                        str += "\n \t\t" + tabs + "$scope.navigateULR(" + destPageId + "," + designResult.DestPageContentId.Value + ");";
                    }
                    str += "\n" + tabs + "\t}\n";
                }
            }

            return str;
        }

        public DesignDTO getDesign(decimal designId)
        {
            return designEntity.getDesign(designId);
        }

        public List<NavigationDTO> getNavigationList(decimal sourcePageContentId)
        {
            return designEntity.getNavigationList(sourcePageContentId);
        }
        public string getControllerClick(ContentDTO contentDTO)
        {
            string str = "";

            List<NavigationDTO> navigationList = getNavigationList(contentDTO.PageContentId);
            foreach (NavigationDTO navigationDTO in navigationList)
            {
                str += "\n";
                str += "$scope.makeDesign_" + navigationDTO.ComponentId + " = function(param){ \n";
                str += "\t $rootScope.design_" + navigationDTO.DestDesignId + "($scope,param); \n";
                str += "} \n";
            }

            return str;
        }
    }
}
