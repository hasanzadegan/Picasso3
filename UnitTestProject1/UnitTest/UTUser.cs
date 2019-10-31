using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Picasso2.BLL.BIZ;
using Picasso2.DTO;
using System.Collections.Generic;
using System.Web.Script.Serialization;
using AutoMapper;

namespace UnitTestProject1
{
    [TestClass]
    public class UTUser
    {
        [TestMethod]
        public void TestMethodUser()
        {


            List<ProjectDTO> projectList = BLL.BLUser.getProjectListSummary(1);

            Assert.AreEqual(projectList[0].ProjectName, "Medicall");

        }

        [TestMethod]
        public void TestCanonical()
        {
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            string obj = "{'x':'1','y':['1','2']}";
             //serializer.Deserialize<dynamic>(obj);
            //Assert.AreEqual(data.x, "1");
        }

        public class XY
        {
            public string x { get; set; }
            public List<string> y { get; set; }
        }
    }
}
