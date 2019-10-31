using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Picasso2.BLL.BIZ;
using Picasso2.DTO;
using System.Collections.Generic;

namespace UnitTestContent
{
    [TestClass]
    public class UTContent
    {
        [TestMethod]
        public void TestMethodAddAndDelete()
        {
            List<ContentDTO> beforPageContentList = BLL.BLPage.getPageContentList(1);
            decimal PageContentId1 = BLL.BLPage.addPageContent(1, 1);
            List<ContentDTO> pageContentList = BLL.BLPage.getPageContentList(1);

            Assert.AreEqual(beforPageContentList.Count + 1, pageContentList.Count);

            BLL.BLPage.removePageContent(PageContentId1);
            List<ContentDTO> afterPageContentList = BLL.BLPage.getPageContentList(1);

            Assert.AreEqual(afterPageContentList.Count, beforPageContentList.Count);
        }

        [TestMethod]
        public void TestMethodSaveContentInfo()
        {
            ContentDTO contentDTO = BLL.BLContent.getContentInfo(1);
            contentDTO.ContentName = "Approve1";
            BLL.BLContent.saveContentInfo(contentDTO);
            contentDTO = BLL.BLContent.getContentInfo(1);
            Assert.AreEqual(contentDTO.ContentName, "Approve1");
            contentDTO = BLL.BLContent.getContentInfo(1);
            contentDTO.ContentName = "Approve";
            BLL.BLContent.saveContentInfo(contentDTO);
            Assert.AreEqual(contentDTO.ContentName, "Approve");
        }


        [TestMethod]
        public void TestMethodAddAndDeleteContent()
        {
            var projectId = 1;
            var contentList1 =  BLL.BLProject.getProjectContentList(projectId);

            decimal contentId = BLL.BLContent.createContent(projectId,"testContent");
            var contentList2 = BLL.BLProject.getProjectContentList(projectId);

            Assert.AreEqual(contentList1.Count+1, contentList2.Count);

            decimal id = BLL.BLContent.deleteContent(contentId);
            var contentList3 = BLL.BLProject.getProjectContentList(projectId);

            Assert.AreEqual(contentList1.Count, contentList3.Count);
        }

    }
}
