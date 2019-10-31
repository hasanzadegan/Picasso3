using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Picasso2.BLL.BIZ;
using Picasso2.DTO;
using System.Collections.Generic;

namespace UnitTestProject1
{
    [TestClass]
    public class UTPage
    {
        [TestMethod]
        public void TestgetPageToken()
        {
            //var pageTokenList = BLL.BLPage.getPageTokenList(1, 1);
            //Assert.AreEqual(pageTokenList.Count, 3);
            var pageTokenList = BLL.BLPage.getPageTokenList(1, 2);
            Assert.AreEqual(pageTokenList.Count, 6);
        }

        [TestMethod]
         public void TestInsertAndDeletePage()
        {
            var pageListBefore = BLL.BLProject.getPageList(1);
            BLL.BLProject.addNewPage(1);
            var pageList = BLL.BLProject.getPageList(1);
            Assert.AreEqual(pageListBefore.Count+1, pageList.Count);

            BLL.BLProject.updatePageInfo(1, "salam", 1);
            BLL.BLProject.updatePageInfo(1, "page1", 1);


            BLL.BLProject.deletePage(pageList[pageList.Count-1].PageId);
            var pageListAfter = BLL.BLProject.getPageList(1);

            Assert.AreEqual(pageListBefore.Count, pageListAfter.Count);

        }

        [TestMethod]
        public void TestMethodGenerate()
        {
            //BLL.BLGenerator.generatePageContent(80006);
        }
    }
}
