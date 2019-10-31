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
    public class TableController : ApiController
    {
        string exportPath = ConfigurationManager.AppSettings["ExportPath"];

        [Route("api/getTableList/{id ?}")]
        public List<TableBodyDTO> getTableList(decimal projectId)
        {
            return BLL.BLTable.getTableList(projectId);
        }

        [Route("api/getTableData/{id ?}")]
        public TableBodyDTO getTableData(decimal tableBodyId)
        {
            return BLL.BLTable.getTableData(tableBodyId);
        }

        [Route("api/addNewTable/{id ?}")]
        public TableBodyDTO addNewTable(decimal projectId,string tableName)
        {
            return BLL.BLTable.addNewTable(projectId, tableName);
        }


        [Route("api/storeTable/{id ?}")]
        public TableBodyDTO storeTable(TableBodyDTO tableBodyDTO)
        {
            return BLL.BLTable.storeTable(exportPath,tableBodyDTO);
        }

        [Route("api/removeTable/{id ?}")]
        public int removeTable(decimal tableBodyId)
        {
            return BLL.BLTable.deleteTable(exportPath, tableBodyId);
        }

        [Route("api/changeTableName/{id ?}")]
        public TableBodyDTO changeTableName(TableBodyDTO tableBodyDTO)
        {
            return BLL.BLTable.changeTableName(exportPath, tableBodyDTO);
        }

        [Route("api/changeComponentTable/{id ?}")]
        public decimal changeComponentTable(decimal tableBodyId, decimal componetId,decimal sourcePageContentId)
        {
            return BLL.BLTable.changeComponentTable(tableBodyId, componetId, sourcePageContentId);
        }




    }
}