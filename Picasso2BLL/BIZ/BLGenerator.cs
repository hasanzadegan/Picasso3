using Picasso2.BLL.Kernel;
using Picasso2.DTO;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System;
using System.Security.Cryptography;
using System.Text;

namespace Picasso2.BLL.BIZ
{
    public class BLGenerator
    {
        ContentDTO contentDTO;
        PageDTO pageDTO;
        LayoutDTO layoutDTO;
        ContainerTypeDTO containerTypeDTO;
        ProjectDTO projectDTO;
        TemplateTypeDTO templateTypeDTO;
        private ZipArchiveEntry entry;

        string mainResult = "";
        string globalJsResult = "";
        string templateTypeglobalJs;
        string contentResult = "";
        private string controllerResult;
        string indexResult = "";

        static string ComputeSha256Hash(string rawData)
        {
            // Create a SHA256   
            using (SHA256 sha256Hash = SHA256.Create())
            {
                // ComputeHash - returns byte array  
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

                // Convert byte array to a string   
                System.Text.StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }

        public string GenerateProjectZip(string exportPath, decimal projectId)
        {
            projectDTO = BLL.BLProject.getProjectInfo(projectId);

            //string zipName = ComputeSha256Hash((new Random()).Next().ToString());
            string zipName = zipNameByTime(projectDTO.ProjectName);

            string path = exportPath + "/" + projectDTO.OwnerUserId + "/" + projectDTO.ProjectId + "/../";
            string dest = path + zipName + ".zip";
            string downloadPath = "viewer/" + projectDTO.OwnerUserId + "/" + projectDTO.ProjectId + "/../" + zipName + ".zip";

            DirectoryInfo zipDir = new DirectoryInfo(path);
            foreach (FileInfo fi in zipDir.GetFiles("*.zip"))
            {
                File.Delete(fi.FullName);
            }
            
            using (var zipToOpen = new FileStream(dest, FileMode.Create))
            using (var archive = new ZipArchive(zipToOpen, ZipArchiveMode.Create))
            {
                var sourceDirectoryName = path + "/" + projectDTO.ProjectId;
                foreach (var file in Directory.GetFiles(sourceDirectoryName, "*", SearchOption.AllDirectories))
                {
                    var entryName = file.Substring(sourceDirectoryName.Length).TrimStart(new[] { Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar });
                    var entry = archive.CreateEntry(entryName);
                    entry.LastWriteTime = File.GetLastWriteTime(file);
                    using (var fs = new FileStream(file, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                    using (var stream = entry.Open())
                    {
                        fs.CopyTo(stream, 81920);
                    }
                }
            }

            return downloadPath;
        }

        private string zipNameByTime(string projectName)
        {
            return  projectName + "_" + 
                    DateTime.Now.Year + "-" + DateTime.Now.Month + "-" + DateTime.Now.Day + " " +
                    DateTime.Now.Hour + "-" + DateTime.Now.Minute + "-" + DateTime.Now.Second;
            
        }


        public string generatePageContent(string exportPath, decimal pageContentId)
        {
            contentDTO = BLL.BLPageContent.getContent(pageContentId);

            pageDTO = BLL.BLPageContent.getPage(pageContentId);
            layoutDTO = BLL.BLLayout.getLayoutInfo(contentDTO.ContentId, contentDTO.LayoutId);
            //templateTypeDTO = BLL.BLTemplateType.getProjectTemplateType(contentDTO.ProjectId);

            //global.js from templateType
            templateTypeDTO = BLL.BLTemplateType.getTypeByName("global.js");
            projectDTO = BLL.BLProject.getProjectInfo(pageDTO.ProjectId);

            containerTypeDTO = BLL.BLContainerType.getContainerType(pageDTO.ContainerTypeId);

            //mainResult = getPageResult();
            mainResult = templateTypeDTO.TokenizeString;
            mainResult = replacePageToken(mainResult, pageDTO.ProjectId, pageDTO.PageId);
            mainResult = replaceGolbalToken(mainResult, templateTypeDTO, pageDTO.ProjectId);
            //mainResult = replaceCurrentPage(pageDTO.PageId, pageContentId);

            //mainResult = replacePageControllers(mainResult, pageDTO.PageId);

            globalJsResult = replaceglobalJSToken(globalJsResult, pageDTO.ProjectId);
            globalJsResult = Parser.removeUnUsableTokens(globalJsResult);

            //mainResult = generateDesigns(mainResult, pageDTO.ProjectId, pageDTO.PageId);
            mainResult = Parser.removeUnUsableTokens(mainResult);
            mainResult = Parser.removeUnUsableAttributes(mainResult);

            contentResult = replaceLayouutComponent(pageContentId, contentDTO, layoutDTO);
            //contentResult += BLL.BLNavigation.getNavigationList(pageContentId);
            contentResult = Parser.removeUnUsableTokens(contentResult);
            contentResult = Parser.removeUnUsableAttributes(contentResult);
            contentResult = generateContentDesigns(projectDTO.ProjectId, pageDTO.PageId, contentResult, contentDTO);
            controllerResult = generateControllerResult(pageDTO.ProjectId, contentDTO, templateTypeDTO, pageContentId);

            BLL.BLDesign.savePageContentDesigns(exportPath, projectDTO, pageContentId);

            generateIndexResult(contentDTO.ProjectId);

            string path = exportPath + "/" + projectDTO.OwnerUserId + "/" + projectDTO.ProjectId;
            if (!Directory.Exists(exportPath))
            {
                Directory.CreateDirectory(exportPath);
            }
            if (!Directory.Exists(path))
            {
                BLL.BLProject.reCreateResources(exportPath, projectDTO);
            }



            saveFile(path, "index.html", indexResult);
            saveFile(path, "global.js", templateTypeglobalJs);

            if (!Directory.Exists(path +"/Content/"+ pageDTO.Path))
                Directory.CreateDirectory(path + "/Content/" + pageDTO.Path);
            if (!Directory.Exists(path + "/Content/" + contentDTO.Path))
                Directory.CreateDirectory(path + "/Content/" + contentDTO.Path);

            saveFile(path, pageDTO.FullPath + ".html", getPageResult(pageDTO));
            saveFile(path, contentDTO.FullPath + ".html", contentResult);
            saveFile(path, contentDTO.FullPath + ".js", controllerResult);

            saveFile(path, "main.html", mainResult);


            saveFile(path, "path.js", getPathJs(projectDTO));

            saveFile(path, "dashboard.js", BLL.BLDashboard.getDashbordJsString(projectDTO.ProjectId));
            saveFile(path, "part.js", BLL.BLDashboard.getPartJsString());
            saveFile(path, "part.html", BLL.BLDashboard.getPartHTMLString());
            saveFile(path, "/Table/table.js", BLL.BLTemplateType.getTypeByName("table.js").TokenizeString);
            saveDashboards(path, projectDTO.ProjectId);

            
            return "";
        }

        public string getPathJs(ProjectDTO projectDTO)
        {
            var pathResult = BLL.BLTemplateType.getTypeByName("path.js").TokenizeString;
            var pageStr = "";
            var pageContentStr = "";
            var pageList = BLL.BLProject.getPageList(projectDTO.ProjectId);
            foreach (PageDTO pageDto in pageList)
            {
                pageStr += "\t\t'"+pageDTO.PageId+"': {name:'"+pageDTO.PageName+"',path:'"+pageDTO.FullPath + "'}, \n";
                var pageContentList = BLL.BLPage.getPageContentList(pageDTO.PageId);
                foreach (ContentDTO pageContentDto in pageContentList)
                {
                    pageContentStr += "\t\t'"+ pageContentDto.PageContentId+ "': {name:'"+pageContentDto.ContentName+"',package:'"+pageDTO.PageName+"',path:'"+pageContentDto.FullPath+"'}, \n";
                }
            }
            pathResult = pathResult.Replace("<<<pageList>>>", pageStr);
            pathResult = pathResult.Replace("<<<pageContentList>>>", pageContentStr);
            return pathResult;
        }

        public string generateAll(string exportPath, decimal projectId)
        {
            int pageCnt = 0;
            int contentCnt = 0;

            projectDTO = BLL.BLProject.getProjectInfo(projectId);

            string path = exportPath + "/" + projectDTO.OwnerUserId + "/" + projectDTO.ProjectId;
            if (!Directory.Exists(exportPath))
            {
                Directory.CreateDirectory(exportPath);
            }
            if (!Directory.Exists(path))
            {
                BLL.BLProject.reCreateResources(exportPath, projectDTO);
            }

            string designCnt = BLL.BLProject.makeAllDesign(exportPath, projectDTO);

            //MultiPanel from templateType
            templateTypeDTO = BLL.BLTemplateType.getTypeByName("global.js");

            mainResult = templateTypeDTO.TokenizeString;
            //mainResult = replacePageToken(mainResult, pageDTO.ProjectId, pageDTO.PageId);
            mainResult = replaceGolbalToken(mainResult, templateTypeDTO, projectId);
            //mainResult = replaceCurrentPage(pageDTO.PageId, pageContentId);
            mainResult = Parser.removeUnUsableTokens(mainResult);
            mainResult = Parser.removeUnUsableAttributes(mainResult);

            globalJsResult = replaceglobalJSToken(globalJsResult, projectId);
            globalJsResult = Parser.removeUnUsableTokens(globalJsResult);

            //generatePageAndContents(projectId, templateTypeDTO);
            List<PageDTO> pageDTOs = BLL.BLProject.getPageList(projectId);

            foreach (PageDTO pageDTO in pageDTOs)
            {
                contentCnt = savePageAndContents(exportPath, pageDTO.PageId, contentCnt);
                pageCnt++;
            }

            generateIndexResult(contentDTO.ProjectId);

            saveFile(path, "index.html", indexResult);
            saveFile(path, "global.js", templateTypeglobalJs);
            saveFile(path, "main.html", mainResult);
            saveFile(path, "dashboard.js", BLL.BLDashboard.getDashbordJsString(projectDTO.ProjectId));
            saveDashboards(path, projectDTO.ProjectId);
            
            return "pages:"+pageCnt + " contents: "+ contentCnt+" "+designCnt;
        }

        private void saveDashboards(string path,decimal projectId)
        {
            List<DashboardDTO> dashboardDTOs = BLL.BLDashboard.getDashboardList(projectId);
            foreach(DashboardDTO dashboardDTO in dashboardDTOs)
            {
                saveFile(path+"/Dashboard/", dashboardDTO.Title+".html", dashboardDTO.Layout);
            }
            List<PanelDTO> panelDTOs = BLL.BLDashboard.getPanelList(projectId);
            foreach (PanelDTO panelDTO in panelDTOs)
            {
                saveFile(path + "/Panel/", panelDTO.Title + ".html", panelDTO.Layout);
            }
        }

        public int savePageAndContents(string exportPath, decimal pageId, int contentCnt)
        {
            PageDTO pageDTO = BLL.BLPage.getPageInfo(pageId);
            ProjectDTO projectDTO = BLL.BLProject.getProjectInfo(pageDTO.ProjectId);
            string path = exportPath + "/" + projectDTO.OwnerUserId + "/" + projectDTO.ProjectId;

            containerTypeDTO = BLL.BLContainerType.getContainerType(pageDTO.ContainerTypeId);
            List<ContentDTO> contentDTOs = BLL.BLPage.getPageContentList(pageId);
            contentResult = "";
            templateTypeDTO = BLL.BLTemplateType.getTypeByName("global.js");


            if (!Directory.Exists(path + "/Content/" + pageDTO.Path))
                Directory.CreateDirectory(path + "/Content/" + pageDTO.Path);
            
            foreach (ContentDTO contentDTO in contentDTOs)
            {
                if (!Directory.Exists(path + "/Content/" + contentDTO.Path))
                    Directory.CreateDirectory(path + "/Content/" + contentDTO.Path);

                layoutDTO = BLL.BLLayout.getLayoutInfo(contentDTO.ContentId, contentDTO.LayoutId);
                contentResult = replaceLayouutComponent(contentDTO.PageContentId, contentDTO, layoutDTO);
                //contentResult += BLL.BLNavigation.getNavigationList(pageContentId);
                contentResult = Parser.removeUnUsableTokens(contentResult);
                contentResult = Parser.removeUnUsableAttributes(contentResult);
                contentResult = generateContentDesigns(pageDTO.ProjectId, pageDTO.PageId, contentResult, contentDTO);
                controllerResult = generateControllerResult(pageDTO.ProjectId, contentDTO, templateTypeDTO, contentDTO.PageContentId);

                saveFile(path , contentDTO.FullPath + ".html", contentResult);
                saveFile(path , contentDTO.FullPath + ".js", controllerResult);
                contentCnt++;
            }


            saveFile(path, pageDTO.FullPath + ".html", getPageResult(pageDTO));
            return contentCnt;
        }

        //private string replaceCurrentPage(decimal pageId, decimal pageContentId)
        //{
        //    mainResult = mainResult.Replace("<<<pageId>>>", pageId.ToString());
        //    mainResult = mainResult.Replace("<<<pageContentId>>>", pageContentId.ToString());
        //    mainResult = mainResult.Replace("<<<rand>>>", (new Random()).Next().ToString());
        //    return mainResult;
        //}

        private string generateContentDesigns(decimal projectId,decimal pageId,string contentResult, ContentDTO contentDTO)
        {
            string files = "'" + contentDTO.FullPath + ".js?r=" + (new Random()).Next().ToString() + "'";
            string includeList = "";

            void createNextDesign(decimal designId) {
                List<DesignResultDTO> designResultDTOList = BLL.BLDesign.getDesignResultList(designId);
                foreach (DesignResultDTO designResultDTO in designResultDTOList)
                {
                    if (designResultDTO.DestDesignId != null)
                    {
                        files += ",'Design/design" + designResultDTO.DestDesignId + ".js?r=" + (new Random()).Next().ToString() + "'";
                        includeList += "<div ng-controller=\"Design_" + designResultDTO.DestDesignId + "\"></div>\n";
                        createNextDesign(designResultDTO.DestDesignId.Value);
                    }
                }
            }

            List<DesignDTO> designDTOs = BLL.BLDesign.getDesignListForPageContent(contentDTO.PageContentId);
            foreach (DesignDTO designDto in designDTOs)
            {
                files += ",'Design/design" + designDto.DesignId + ".js?r="+ (new Random()).Next().ToString() + "'";
                includeList += "<div ng-controller=\"Design_" + designDto.DesignId + "\"></div>\n";
                if (designDto.isMulipledest == 1)
                {
                    createNextDesign(designDto.DesignId);
                }
            }
            TemplateTypeDTO PageContentTemplate = BLL.BLTemplateType.getTypeByName("PageContent");
            string formName = BLL.BLPage.getPageToken(projectId, pageId, "FormName");

            contentDTO = BLL.BLPageContent.getContent(contentDTO.PageContentId);
            files = BLL.BLContent.getContentLazyFiles(contentDTO, files,layoutDTO);

            PageContentTemplate.TokenizeString = PageContentTemplate.TokenizeString.Replace("<<<files>>>",files);
            PageContentTemplate.TokenizeString = PageContentTemplate.TokenizeString.Replace("<<<PageContentId>>>", contentDTO.PageContentId.ToString());
            PageContentTemplate.TokenizeString = PageContentTemplate.TokenizeString.Replace("<<<FormName>>>",formName);
            PageContentTemplate.TokenizeString = PageContentTemplate.TokenizeString.Replace("<<<includeList>>>", includeList);
            PageContentTemplate.TokenizeString = PageContentTemplate.TokenizeString.Replace("<<<contentResult>>>", contentResult);
            //contentResult = "<div oc-lazy-load=\"{name:'myApp',files:[" + files + "]}\"> \n" +
            //    "\t"+includeList +
            //    "\t\t<div ng-controller=\"Ctrl" + contentDTO.PageContentId + "\">\n \t" + contentResult + " \n </div>\n" +
            //    "\t\t</div> \n" +
            //    "\t</div> \n" +
            //    "</div> \n";
            return PageContentTemplate.TokenizeString;
        }


        private string generateControllerResult(decimal projectId, ContentDTO contentDTO, TemplateTypeDTO templateTypeDTO, decimal pageContentId)
        {
            string allFunctionList = "";
            string allDirectiveList = "";

            string result = BLL.BLTemplateType.getTypeByName("angularJs-Content").TokenizeString;

            WebDefinerDTO templateWebDefinerDTO = BLL.BLWebDefiner.getWebDefinerInfo(templateTypeDTO.WebDefinerId);
            List<WebDefinerDTO> webDefinerList = BLL.BLWebDefiner.getComponentListWebDefinerForPageContent(pageContentId);

            string allInjectorList = templateWebDefinerDTO.InjectorList;
            string allVariableList = templateWebDefinerDTO.VariableList;
            string allParamList = templateWebDefinerDTO.ParamList;

            foreach (WebDefinerDTO webDefinerDTO in webDefinerList)
            {
                allParamList += "," + webDefinerDTO.ParamList;
                allVariableList += "," + webDefinerDTO.VariableList;

                allFunctionList += "\n " + webDefinerDTO.FunctionList;
                allDirectiveList += "\n " + webDefinerDTO.Directive;
                allInjectorList += "," + webDefinerDTO.InjectorList;
            }

            //todo replace App with token
            result = result.Replace("<<<Page.AppName>>>", BLL.BLProject.getProjectToken(projectId, "Page.AppName"));
            result = result.Replace("<<<ControllerName>>>", "Ctrl" + contentDTO.PageContentId);
            result = result.Replace("<<<Variables>>>", Parser.clearExtraComa(allVariableList));
            result = result.Replace("<<<Params>>>", Parser.clearExtraComa(allParamList));
            result = result.Replace("<<<Functions>>>", "<<<Functions>>> \n"+allFunctionList);
            result = result.Replace("<<<DirectiveList>>>", allDirectiveList);
            result = result.Replace("<<<InjectorList>>>", Parser.clearExtraComa(allInjectorList));

            string controllerClicks = getControllerClick(contentDTO);
            result = result.Replace("<<<Functions>>>", controllerClicks);
            result = Parser.removeUnUsableTokens(result);

            return result;
        }

        private string getControllerClick(ContentDTO contentDTO)
        {
            return BLL.BLDesign.getControllerClick(contentDTO);
        }

        public string getDesignsForPageContent(decimal pageContentId)
        {
            return BLL.BLDesign.getDesignFunctionsForPageContent(pageContentId);
        }

        private void generateIndexResult(decimal? projectId)
        {
            indexResult = "";
            List<PageDTO> pageList = BLL.BLProject.getPageList(projectId.Value);
            foreach (PageDTO pageDTO in pageList)
            {
                indexResult += "<h1>" + pageDTO.PageName + ":" + pageDTO.PageId + "</h1>";
                indexResult += "<ul>";
                List<ContentDTO> contentList = BLL.BLPage.getPageContentList(pageDTO.PageId);
                foreach (ContentDTO contentDTO in contentList)
                {
                    indexResult += "<li>"+
                                    "<a href=\"main.html?r="+
                                    (new Random()).Next().ToString() +
                                    "&pageId="+pageDTO.PageId+
                                    "&pageContentId=" + contentDTO.PageContentId + "\">" +
                                        contentDTO.ContentName +
                                    "</a></li>";
                }
                indexResult += "</ul>";
            }
        }

        public string getPageResult(PageDTO pageDTO)
        {
            string pageResult = BLL.BLTemplateType.getTypeByName("PageWrapper").TokenizeString;
            ProjectDTO projectDTO = BLL.BLProject.getProjectInfo(pageDTO.ProjectId);

            pageResult = pageResult.Replace("<<<skinName>>>", BLL.BLPage.getPageToken(projectDTO.ProjectId,pageDTO.PageId, "Skin"));
            pageResult = pageResult.Replace("<<<Page.ContainerType>>>", "\n" + containerTypeDTO.TokenizeString);
            pageResult = pageResult.Replace("<<<ContainerType.Content>>>", getInitContent(pageDTO));
            pageResult = pageResult.Replace("<<<pageId>>>", pageDTO.PageId.ToString());
            pageResult = pageResult.Replace("<<<disabledPageContent>>>", BLL.BLPage.getPageToken(projectDTO.ProjectId, pageDTO.PageId, "disabledPageContent"));

            // todo make better
            if (containerTypeDTO.ContainerTypeId == 2)
            {
                pageResult = pageResult.Replace("<<<All.Injectors>>>", "<<<All.Injectors>>>,'md-steppers'");
                pageResult = pageResult.Replace("<<<All.JSList>>>", "<<<All.JSList>>> \n" + "<script src=\"scripts/md-steppers.js\"></script>");
                pageResult = pageResult.Replace("<<<All.CSSList>>>", "<<<All.CSSList>>> \n" + "<link href=\"scripts/md-steppers.css\" rel=\"stylesheet\" />");
            }

            return pageResult;
        }


        private string getInitContent(PageDTO pageDTO)
        {
            string contentsInitializer = "<div ng-init=\"contents =[";
            List<ContentDTO> contentDTOList = BLL.BLPage.getPageContentList(pageDTO.PageId);
            string contents = "";
            int c = 0;
            foreach (ContentDTO contentDTO in contentDTOList)
            {
                contents += ",{'index':" + c + ",'pageContentId':'" + contentDTO.PageContentId + "','contentId':'" + contentDTO.ContentId + "', 'title':'" + contentDTO.ContentName + "','icon':'" + contentDTO.Icon + "'}";
                c++;
            }
            if(contents.Length>0)
                contentsInitializer += contents.Substring(1);
            contentsInitializer += "];selectedContent();\"></div>";
            return contentsInitializer;
        }

        private string replaceLayouutComponent(decimal sourcePageContentId, ContentDTO contentDTO, LayoutDTO layoutDTO)
        {
            string contentResult = layoutDTO.TokenizeString;
            List<string> placeHolderList = Parser.getPlaceHolderList(contentResult, Constant.pattern);
            foreach (string placeHolder in placeHolderList)
            {
                List<ComponentDTO> tileComponentList = BLL.BLComponent.getComponentList(contentDTO.ContentId, Parser.clean(placeHolder));
                string tileComponentStr = "";
                foreach (ComponentDTO componentDTO in tileComponentList)
                {
                    tileComponentStr += "\n" + BLL.BLComponent.renderComponent(componentDTO, sourcePageContentId);
                }
                contentResult = contentResult.Replace(placeHolder, tileComponentStr);
            }

            return contentResult;
        }

        private string replaceGolbalToken(string result, TemplateTypeDTO templateTypeDTO, decimal projectId)
        {
            WebDefinerDTO templateWebDefinerDTO = BLL.BLWebDefiner.getWebDefinerInfo(templateTypeDTO.WebDefinerId);

            string allInjectorList = templateWebDefinerDTO.InjectorList;
            string allVariableList = templateWebDefinerDTO.VariableList;
            string allParamList = templateWebDefinerDTO.ParamList;

            result = result.Replace("<<<All.Injectors>>>", Parser.clearExtraComa(allInjectorList));
            result = result.Replace("<<<All.Variables>>>", Parser.clearExtraComa(allVariableList));
            result = result.Replace("<<<All.Params>>>", Parser.clearExtraComa(allParamList));

            result = result.Replace("<<<All.Functions>>>", templateWebDefinerDTO.FunctionList );
            result = result.Replace("<<<All.JSList>>>", templateWebDefinerDTO.JS );
            result = result.Replace("<<<All.CSSList>>>", templateWebDefinerDTO.CSS);
            //result = result.Replace("<<<Title>>>", projectDTO.ProjectName);

            return result;
        }

        private string replaceglobalJSToken(string globalJsResult, decimal projectId)
        {
            templateTypeglobalJs = BLL.BLTemplateType.getTypeByName("main.js").TokenizeString;
            WebDefinerDTO templateWebDefinerDTO = BLL.BLWebDefiner.getWebDefinerInfo(templateTypeDTO.WebDefinerId);

            templateTypeglobalJs = templateTypeglobalJs.Replace("<<<Injectors>>>", templateWebDefinerDTO.InjectorList);
            templateTypeglobalJs = templateTypeglobalJs.Replace("<<<Variables>>>", templateWebDefinerDTO.VariableList);
            templateTypeglobalJs = templateTypeglobalJs.Replace("<<<Params>>>", templateWebDefinerDTO.ParamList);
            templateTypeglobalJs = templateTypeglobalJs.Replace("<<<Functions>>>", templateWebDefinerDTO.FunctionList);

            templateTypeglobalJs = templateTypeglobalJs.Replace("<<<AppName>>>", BLL.BLProject.getProjectToken(projectId, "Page.AppName"));
            templateTypeglobalJs = templateTypeglobalJs.Replace("<<<Theme>>>", BLL.BLProject.getProjectToken(projectId, "Page.Theme"));
            templateTypeglobalJs = templateTypeglobalJs.Replace("<<<AppTitle>>>", BLL.BLProject.getProjectToken(projectId, "Page.AppTitle"));
            templateTypeglobalJs = templateTypeglobalJs.Replace("<<<BaseUrls>>>", BLL.BLProject.getProjectToken(projectId, "BaseUrls"));
            templateTypeglobalJs = templateTypeglobalJs.Replace("<<<FirstPageId>>>", BLL.BLProject.getProjectToken(projectId, "FirstPageId"));
            templateTypeglobalJs = templateTypeglobalJs.Replace("<<<FirstPageContentId>>>", BLL.BLProject.getProjectToken(projectId, "FirstPageContentId"));

            return templateTypeglobalJs;
        }

        private string replacePageToken(string result, decimal projectId, decimal pageId)
        {
            List<ContainerTokenDTO> containerTokenDTO = BLL.BLPage.getPageTokenList(projectId, pageId);
            List<string> placeHolderList = Parser.getPlaceHolderList(result, Constant.pattern);

            ProjectDTO projectDTO = BLL.BLProject.getProjectInfo(projectId);
            if (result.Contains("<<<Page.ScriptBasePath>>>"))
            {
                result = result.Replace("<<<Page.ScriptBasePath>>>", projectDTO.ScriptBasePath);
            }

            foreach (var placeHolder in placeHolderList)
            {
                if (placeHolder.Contains("Page."))
                {
                    var containerToken = containerTokenDTO.Find(w => w.TokenName == Parser.clean(placeHolder));
                    if (containerToken != null)
                        result = result.Replace(placeHolder, containerToken.TokenValue);
                }

                if (placeHolder.Contains("All."))
                {
                    var containerToken = containerTokenDTO.Find(w => w.TokenName == Parser.clean(placeHolder));
                    if (containerToken != null)
                        result = result.Replace(placeHolder, placeHolder + containerToken.TokenValue);
                }
            }
            //result = generateDashboard(projectId,pageId,pageContentId,result);
            return result;
        }

        //private string generateDashboard(decimal projectId, decimal pageId,decimal pageContentId, string result)
        //{

        //    string dashboardTypeName = BLL.BLProject.getProjectToken(projectId, "DashboardTypeName");
        //    string dashboardTemplate = BLL.BLTemplateType.getTypeByName(dashboardTypeName).TokenizeString;
        //    //dashboardTemplate = dashboardTemplate.Replace("<<<pageId1>>>", pageId.ToString());
        //    //dashboardTemplate = dashboardTemplate.Replace("<<<pageContentId1>>>", pageContentId.ToString());
        //    result = result.Replace("<<<DashboardType>>>", dashboardTemplate);
        //    return result;
        //}

        public void saveFile(string path, string fileName, string fileData)
        {
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            //var exportDir = HostingEnvironment.MapPath(path);
            File.WriteAllText(path + "/" + fileName, fileData);
        }

    }
}