using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Picasso2.BLL.BIZ;
using Picasso2.DTO;
using System.Collections.Generic;
using Picasso2.BLL.Kernel;

namespace UnitTestGenerator
{
    [TestClass]
    public class UTComponent
    {
        [TestMethod]
        public void TestTileComponentList()
        {
            var componentList = BLL.BLComponent.getComponentList(1, "Middle");
            Assert.AreEqual(componentList[0].InheritedTypeId, 3);
        }

        [TestMethod]
        public void
        TestGetComponentGenericType()
        {
            ComponentDTO componentDTO = BLL.BLComponent.getComponentInfo(2);
            Assert.AreEqual(componentDTO.InheritedType.GenericType.Title, "input");
        }
        

        [TestMethod]
        public void
        TestGetComponentTokenList()
        {
            ComponentDTO componentDTO = BLL.BLComponent.getComponentInfo(2);
            var placeHolderList = Parser.getPlaceHolderList(componentDTO.InheritedType.GenericType.TokenizeString,Constant.pattern);
            Assert.AreEqual(placeHolderList.Count, 10);
        }

        [TestMethod]
        public void
        TestgetTokenList()
        {
            BLL.BLComponent.getComponentTotalTokenList(40017,1,1);
        }

        [TestMethod]
        public void TestsaveAndDeleteComponent()
        {
            decimal contentId = 1;
            string tileName = "col2";
            decimal inheritedTypeId = 1;

            var componentList1 = BLL.BLComponent.getComponentList(contentId, tileName);
            InheritedTypeDTO inheritedTypeDTO = BLL.BLInheritedType.getInheritedTypeInfo("INPUT");

            ComponentDTO componentDTO = BLL.BLComponent.saveComponent(contentId,inheritedTypeId,tileName,"","");

            var componentList2 = BLL.BLComponent.getComponentList(contentId, tileName);
            Assert.AreEqual(componentList1.Count+1, componentList2.Count);

            BLL.BLComponent.deleteComponent(componentDTO);
            var componentList3 = BLL.BLComponent.getComponentList(contentId, tileName);

            Assert.AreEqual(componentList1.Count, componentList3.Count);

        }

        [TestMethod]
        public void TestsaveAndDeleteComponentTokenList()
        {
            int componentId = 40007;
            ComponentDTO componentDTO = BLL.BLComponent.getComponentInfo(componentId);

            List<ComponentTokenDTO> componentTokenList = new List<ComponentTokenDTO>();
            ComponentTokenDTO componentTokenDTO = new ComponentTokenDTO();
            componentTokenDTO.TokenName = "test";
            componentTokenDTO.TokenValue = "test";
            componentTokenDTO.ComponentId = componentDTO.ComponentId;

            componentTokenList.Add(componentTokenDTO);

            BLL.BLComponent.saveComponentTokenList(componentDTO.ComponentId, componentTokenList);

            componentTokenList = BLL.BLComponent.getComponentTokenList(componentDTO.ComponentId);
            Assert.AreEqual(componentTokenList.Count, 1);

            BLL.BLComponent.deleteComponentToken(componentId);

            componentTokenList = BLL.BLComponent.getComponentTokenList(componentDTO.ComponentId);
            Assert.AreEqual(componentTokenList.Count, 0);

        }

        [TestMethod]
        public void TestsaveAndDeleteInheritedComponent()
        {
            //int componentId = 40007;
            //string componentName = "newComponent";
            //decimal projectId = 1;
            //ComponentDTO componentDTO = BLL.BLComponent.getComponentInfo(componentId);

            //List<ComponentTokenDTO> componentTokenList1 = BLL.BLComponent.getComponentTokenList(componentId);
            //componentDTO.ComponentTokenList = componentTokenList1;

            //InheritedTypeDTO inheritedTypeDTO = BLL.BLInheritedType.saveInheritedType(componentDTO, componentName, projectId);
            //Assert.AreEqual(inheritedTypeDTO.Title, componentName);


            //List<InheritedTokenDTO> InheritedTokenList1 = BLL.BLInheritedToken.getInheritedTokenList(inheritedTypeDTO.InheritedTypeId);
            //Assert.AreEqual(InheritedTokenList1.Count, 0);


            //int id = BLL.BLInheritedType.deleteInheritedType(inheritedTypeDTO.InheritedTypeId);
            //List<InheritedTokenDTO> InheritedTokenList2 = BLL.BLInheritedToken.getInheritedTokenList(inheritedTypeDTO.InheritedTypeId);
            //Assert.AreEqual(InheritedTokenList2.Count, 0);
        }

    }
}
