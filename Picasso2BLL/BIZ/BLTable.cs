using System.Collections.Generic;
using Picasso2.Entity;
using Picasso2.DTO;
using System;
using System.IO;
using Picasso2.BLL.Kernel;

namespace Picasso2.BLL.BIZ
{
    public class BLTable
    {
        TableEntity tableEntity = new TableEntity();
        public TableBodyDTO getTableData(decimal tableBodyId)
        {
            return tableEntity.getTableData(tableBodyId);
        }

        public string generateTable(TableBodyDTO tableBodyDTO)
        {
            string ngTableTokenizerString = BLL.BLTemplateType.getTypeByName("NgTable").TokenizeString;
            string ngTableColumnTokenizerString = BLL.BLTemplateType.getTypeByName("NgTableColumn").TokenizeString;
            string ngTableActionTokenizerString = BLL.BLTemplateType.getTypeByName("NgTableAction").TokenizeString;
            string columnsStr = "";
            string totalcolumnsStr = "";

            ngTableTokenizerString = ngTableTokenizerString.Replace("<<<ngModel>>>", tableBodyDTO.NgModel);
            ngTableTokenizerString = ngTableTokenizerString.Replace("<<<TableName>>>", tableBodyDTO.TableName);
            ngTableTokenizerString = ngTableTokenizerString.Replace("<<<CssClass>>>", tableBodyDTO.CssClass);
            ngTableTokenizerString = ngTableTokenizerString.Replace("<<<rand>>>", (new Random()).Next().ToString());

            int c = 0;
            if (tableBodyDTO.ColumnList != null)
            {
                foreach (TableColumnDTO tableColumnDTO in tableBodyDTO.ColumnList)
                {
                    columnsStr = ngTableColumnTokenizerString;
                    if (c > 0)
                        columnsStr = "\n" + columnsStr;
                    columnsStr = columnsStr.Replace("<<<Title>>>", tableColumnDTO.ColTitle);
                    columnsStr = columnsStr.Replace("<<<Name>>>", tableColumnDTO.ColName);
                    columnsStr = columnsStr.Replace("<<<Flex>>>", tableColumnDTO.Flex.ToString());
                    columnsStr = columnsStr.Replace("<<<isShow>>>", tableColumnDTO.IsShow?"true":"false");
                    columnsStr = columnsStr.Replace("<<<headerClass>>>", tableColumnDTO.IsShow? "" : "hiddenColumn");
                    if (tableColumnDTO.HasFilter)
                        columnsStr = columnsStr.Replace("<<<Filter>>>", "filter = \"{ " + tableColumnDTO.ColName + ": 'text'}\"");
                    if (tableColumnDTO.HasSort)
                        columnsStr = columnsStr.Replace("<<<Sort>>>", "sortable=\"'" + tableColumnDTO.ColName + "'\"");
                    if (tableColumnDTO.IsKey)
                        columnsStr = columnsStr.Replace("<<<Key>>>", "ng-init=\"item.keys[$index]." + tableColumnDTO.ColName + " = item." + tableColumnDTO.ColName + "\"");
                    totalcolumnsStr += columnsStr;
                    c++;
                }
            }

            PageDTO savePageDTO = new PageDTO();
            PageDTO deletePageDTO = new PageDTO();
            if (tableBodyDTO.SavePageContentId != null)
                savePageDTO = BLL.BLPageContent.getPage(tableBodyDTO.SavePageContentId.Value);
            if (tableBodyDTO.SavePageContentId != null)
                deletePageDTO = BLL.BLPageContent.getPage(tableBodyDTO.DeletePageContentId.Value);

            if (tableBodyDTO.DeletePageContentId != null)
                BLL.BLPageContent.getPage(tableBodyDTO.DeletePageContentId.Value);

            ngTableTokenizerString = ngTableTokenizerString.Replace("<<<HasNew>>>", tableBodyDTO.HasNew.Value ? "true" : "false");


            if (tableBodyDTO.HasNew.Value == true)
            {
                if (savePageDTO.PageId > 0)
                {
                    ngTableTokenizerString = ngTableTokenizerString.Replace("<<<NewPageContent>>>",
                        "newTableRow(" + savePageDTO.PageId + "," +
                        tableBodyDTO.SavePageContentId.Value + ", item.keys[$index])");
                }
            }

            ngTableTokenizerString = ngTableTokenizerString.Replace("<<<columns>>>", totalcolumnsStr);

            if (tableBodyDTO.HasView != null && tableBodyDTO.HasView.Value == true)
            {
                if (savePageDTO.PageId > 0)
                {
                    ngTableActionTokenizerString = ngTableActionTokenizerString.Replace("<<<ViewPageContent>>>",
                        "viewTableRow(" + savePageDTO.PageId + "," +
                        tableBodyDTO.SavePageContentId.Value + ", item.keys[$index])");
                }
            }
            ngTableActionTokenizerString = ngTableActionTokenizerString.Replace("<<<HasView>>>", tableBodyDTO.HasView.Value == true ? "true" : "false");

            if (tableBodyDTO.HasEdit != null && tableBodyDTO.HasEdit.Value == true)
            {
                if (savePageDTO.PageId > 0)
                {
                    string editFunction = "editTableRow(" + savePageDTO.PageId + "," + tableBodyDTO.SavePageContentId.Value + ", item.keys[$index])";
                    ngTableTokenizerString = ngTableTokenizerString.Replace("<<<ClickRow>>>", editFunction);
                    ngTableActionTokenizerString = ngTableActionTokenizerString.Replace("<<<EditPageContent>>>",editFunction);
                }
            }
            ngTableActionTokenizerString = ngTableActionTokenizerString.Replace("<<<HasEdit>>>", tableBodyDTO.HasEdit.Value == true ? "true" : "false");

            if (tableBodyDTO.HasDelete != null && tableBodyDTO.HasDelete.Value == true)
            {
                if (deletePageDTO.PageId > 0)
                {
                    ngTableActionTokenizerString = ngTableActionTokenizerString.Replace("<<<DeletePageContent>>>",
                        "deleteTableRow(" + deletePageDTO.PageId + "," +
                         tableBodyDTO.DeletePageContentId.Value + ", item.keys[$index])");
                }
            }
            ngTableActionTokenizerString = ngTableActionTokenizerString.Replace("<<<HasDelete>>>", tableBodyDTO.HasDelete.Value == true ? "true" : "false");



            if (tableBodyDTO.HasDelete == true || tableBodyDTO.HasEdit == true || tableBodyDTO.HasView == true)
            {
                ngTableTokenizerString = ngTableTokenizerString.Replace("<<<actions>>>", ngTableActionTokenizerString);
            }

            ngTableTokenizerString = Parser.removeUnUsableTokens(ngTableTokenizerString);
            ngTableTokenizerString = Parser.removeUnUsableAttributes(ngTableTokenizerString);
            return ngTableTokenizerString;
        }

        public int deleteTable(string exportPath, decimal tableBodyId)
        {
            TableBodyDTO tableBodyDTO = getTableData(tableBodyId);
            string path = createProjectPath(exportPath, tableBodyDTO);
            if (File.Exists(path + tableBodyId + ".html"))
                File.Delete(path + tableBodyId + ".html");
            return tableEntity.deleteTable(tableBodyDTO);
        }

        public TableBodyDTO changeTableName(string exportPath, TableBodyDTO tableBodyDTO)
        {
            return tableEntity.changeTableName(tableBodyDTO);
        }

        public decimal changeComponentTable(decimal tableBodyId, decimal componentId, decimal sourcePageContentId)
        {
            decimal tableBodyId1 = tableEntity.changeComponentTable(tableBodyId, componentId);
            ComponentDTO componentDTO = BLL.BLComponent.getComponentInfo(componentId);
            componentDTO.TableBodyId = tableBodyId1;


            TableBodyDTO tableBodyDTO = BLL.BLTable.getTableData(tableBodyId);

            InheritedTypeDTO inheritedTypeDTO = BLL.BLInheritedType.getInheritedTypeInfo(componentDTO.InheritedTypeId);
            GenericTypeDTO genericTypeDTO = BLL.BLGenericType.getGenericTypeInfo(inheritedTypeDTO.GenericTypeId);

            BLL.BLComponent.saveComponentRenderHTML(componentDTO.ComponentId, genericTypeDTO.TokenizeString.Replace("<<<tableId>>>", tableBodyDTO.TableBodyId.ToString()));
            return tableBodyId1;
        }

        private void saveOrUpdateToken(decimal componentId, List<ComponentTokenDTO> componentTokenDTOs, string key, string value)
        {
            ComponentTokenDTO componentTokenDTO = componentTokenDTOs.Find(w => w.TokenName == key);
            if (componentTokenDTO == null)
            {
                ComponentTokenDTO newTokenTableId = new ComponentTokenDTO();
                newTokenTableId.ComponentId = componentId;
                newTokenTableId.TokenName = key;
                newTokenTableId.TokenValue = value;
                componentTokenDTO = BLL.BLComponent.addComponentToken(newTokenTableId);
            }
            else
            {
                componentTokenDTO.TokenValue = value;
                BLL.BLComponent.updateComponentToken(componentTokenDTO);
            }
        }

        public TableBodyDTO storeTable(string exportPath, TableBodyDTO tableBodyDTO)
        {
            string strTableView = generateTable(tableBodyDTO);
            tableBodyDTO.RenderView = strTableView;
            TableBodyDTO tableBodyDTO1 = tableEntity.storeTable(tableBodyDTO);
            string path = createProjectPath(exportPath, tableBodyDTO1);
            BLL.BLGenerator.saveFile(path, tableBodyDTO1.TableBodyId + ".html", strTableView);
            return tableBodyDTO1;
        }

        public TableBodyDTO addNewTable(decimal projectId, string tableName)
        {
            return tableEntity.addNewTable(projectId, tableName);
        }

        public List<TableBodyDTO> getTableList(decimal projectId)
        {
            return tableEntity.getTableList(projectId);
        }

        //public string saveTable(string exportPath, decimal tableBodyId)
        //{
        //    TableBodyDTO tableBodyDTO = getTableData(tableBodyId);
        //    string strTableView = generateTable(tableBodyDTO);
        //    tableBodyDTO.RenderView = strTableView;
        //    string path = createProjectPath(exportPath, tableBodyDTO);
        //    BLL.BLGenerator.saveFile(path, tableBodyDTO.TableBodyId+".html", strTableView);
        //    return strTableView;
        //}

        private string createProjectPath(string exportPath, TableBodyDTO tableBody)
        {
            ProjectDTO projectDTO = BLL.BLProject.getProjectInfo(tableBody.ProjectId.Value);
            string path = exportPath + "/" + projectDTO.OwnerUserId + "/" + projectDTO.ProjectId + "/Table/";
            return path;
        }

    }
}
