using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Picasso2.BLL.BIZ;
using Picasso2.DTO;
using System.Collections.Generic;
using Picasso2.BLL.Kernel;

namespace UnitTestGenerator
{
    [TestClass]
    public class UTLayout
    {
        [TestMethod]
        public void TestMethodLayoutView()
        {
            Parser.stringTokenizeToHTML("salam <<<shahrokh>>> test");
        }

        [TestMethod]
        public void TestMethodGetLayoutList()
        {
            var projectId = 1;
            var layoutList = BLL.BLLayout.getLayoutList(projectId);
            Assert.AreEqual(layoutList[0].LayoutName, "standard");

        }
        
        [TestMethod]
        public void TestMethodSaveLayoutInfo()
        {

            //LayoutDTO layoutDTO = BLL.BLLayout.getLayoutInfo(1);
            //Assert.AreEqual(layoutDTO.LayoutName, "standard");

            //layoutDTO.LayoutName = "standard1";
            //BLL.BLLayout.saveLayoutInfo(layoutDTO);
            //LayoutDTO layoutDTO1 = BLL.BLLayout.getLayoutInfo(1);
            //Assert.AreEqual(layoutDTO1.LayoutName, "standard1");


            //layoutDTO.LayoutName = "standard";
            //BLL.BLLayout.saveLayoutInfo(layoutDTO);
            //LayoutDTO layoutDTO2 = BLL.BLLayout.getLayoutInfo(1);
            //Assert.AreEqual(layoutDTO2.LayoutName, "standard");

        }
    }
}
