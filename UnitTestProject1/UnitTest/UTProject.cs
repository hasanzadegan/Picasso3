using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Picasso2.BLL.BIZ;
using Picasso2.DTO;
using System.Collections.Generic;

namespace UnitProject
{
    [TestClass]
    public class UTProject
    {
        [TestMethod]
        public void TestgetProjectToken()
        {
            var projectTokenList = BLL.BLProject.getProjectTokenList(1);
            Assert.AreEqual(projectTokenList.Count, 6);
        }

        [TestMethod]
        public void TestAddAndRemoveProject()
        {
            var userId = 1;
            var beforeProjectList = BLL.BLUser.getProjectList(userId);
            decimal projectId = BLL.BLUser.addNewProject(userId);
            var ProjectList = BLL.BLUser.getProjectList(userId);
            BLL.BLUser.deleteProject(projectId);
            var afterProjectList = BLL.BLUser.getProjectList(userId);

            Assert.AreEqual(beforeProjectList.Count, afterProjectList.Count);
        }


        [TestMethod]
        public void TestgetProjectInfo()
        {
            ProjectDTO projectDTO = BLL.BLProject.getProjectInfo(1);
            Assert.AreEqual(projectDTO.ProjectName, "Medicall");
        }

        [TestMethod]
        public void TestgetProjectTotalToken()
        {
            BLL.BLProject.getProjectTotalToken(1);
        }

    }
}
