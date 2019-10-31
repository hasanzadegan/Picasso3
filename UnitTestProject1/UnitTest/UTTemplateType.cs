using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using Picasso2.BLL.BIZ;
using Picasso2.BLL.Kernel;
using Picasso2.DTO;

namespace UnitTestProject1
{
    [TestClass]
    public class UTTemplateType
    {

        [TestMethod]
        public void TestGetTemplatePlaceHolderList()
        {
            BLProject blProject = new BLProject();
            //TemplateDTO templateDTO = BLL.BLTemplateType.getTypeByName("");// blProject.getTemplate(1);

            BLTemplateType bLTemplateType = new BLTemplateType();
            TemplateTypeDTO templateTypeDTO  = bLTemplateType.getTypeByName("angularJs-Materil");

            List<string> tokenList = Parser.getPlaceHolderList(templateTypeDTO.TokenizeString, Constant.pattern);
            Assert.AreEqual(tokenList.Count, 15);
            Assert.AreEqual(tokenList[3], "<<<Page.AppName>>>");
        }

    }
}
