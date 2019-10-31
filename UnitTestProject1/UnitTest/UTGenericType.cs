using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using Picasso2.BLL.BIZ;
using Picasso2.BLL.Kernel;
using Picasso2.DTO;

namespace UnitTestProject1
{
    [TestClass]
    public class UTGenericType
    {
        [TestMethod]
        public void TestGetGenericTypePlaceHolderList()
        {
            GenericTypeDTO genericTypeDTO = BLL.BLGenericType.getGenericTypeInfo(1);
            List<string> genericTokenList = Parser.getPlaceHolderList(genericTypeDTO.TokenizeString, Constant.pattern);
            Assert.AreEqual(genericTokenList[2], "<<<maxLength>>>");
        }

    }
}
