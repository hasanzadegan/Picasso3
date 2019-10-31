using Picasso2.Entity;
using Picasso2.DTO;
using System;
using System.Collections.Generic;
using Picasso2.BLL.Kernel;

namespace Picasso2.BLL.BIZ
{
    public class BLContent
    {
        ContentEntity contentEntity = new ContentEntity();
        
        public ContentDTO getContentInfo(decimal contentId)
        {
            return contentEntity.getContentInfo(contentId);
        }

        public decimal saveContentInfo(ContentDTO contentDTO)
        {
            return contentEntity.saveContentInfo(contentDTO);
        }

        public decimal createContent(int projectId,string contentName)
        {
            return contentEntity.createContent(projectId, contentName);
        }

        public decimal deleteContent(decimal contentId)
        {
            return contentEntity.deleteContent(contentId);
        }

        public void SetPath(string exportPath, ContentDTO contentDTO)
        {
            BLL.BLPageContent.SavePageContentInfo(contentDTO);
        }

        public string getContentLazyFiles(ContentDTO contentDTO,string files, LayoutDTO layoutDTO)
        {
            List<string> tileNames =  Parser.getPlaceHolderList(layoutDTO.TokenizeString, Constant.pattern);
            string str = "";
            List<string> listStr = contentEntity.getContentLazyFiles(contentDTO.ContentId, tileNames);
            foreach (var file in listStr)
            {
                str += "," + file;
            }
            return Parser.clearExtraComa(files+","+str);
        }
    }
}
