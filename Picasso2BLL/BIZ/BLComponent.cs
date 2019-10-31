using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Picasso2.Model;
using Picasso2.Entity;
using Picasso2.DTO;
using AutoMapper;
using Picasso2.BLL.Kernel;

namespace Picasso2.BLL.BIZ
{
    public class BLComponent
    {
        ComponentEntity componentEntity = new ComponentEntity();
        ComponentTokenEntity componentTokenEntity = new ComponentTokenEntity();
        public List<ComponentDTO> getComponentList(decimal contentId, string tileName)
        {
            return componentEntity.getComponentList(contentId,tileName);
        }
        public List<ComponentDTO> getPageContentComponentList(decimal pageContentId, string tileName)
        {
            return componentEntity.getPageContentComponentList(pageContentId, tileName);
        }
        public int swapComponent(string tileName, decimal componentId, decimal orderInTile)
        {
            return componentEntity.swapComponent(tileName, componentId, orderInTile);
        }
        public List<ComponentTokenDTO> getComponentTokenList(decimal componentId)
        {
            return componentEntity.getComponentTokenList(componentId);
        }

        public ComponentDTO changeComponentHTML(ComponentDTO componentDTO)
        {
            return componentEntity.changeComponentHTML(componentDTO);
        }

        public ComponentDTO changeComponentName(decimal componentId, string newName)
        {
            return componentEntity.changeComponentName(componentId, newName);
        }
        public List<ComponentTokenDTO> getComponentTotalTokenList(decimal componentId, decimal projectId, decimal pageId)
        {
            List<ComponentTokenDTO> tokenList = new List<ComponentTokenDTO>();

            ComponentDTO componentDTO = componentEntity.getComponentInfo(componentId);
            string TokenizeString = componentDTO.InheritedType.GenericType.TokenizeString;
            List<string> placeHolderList = Parser.getPlaceHolderList(TokenizeString, Constant.pattern);
            Dictionary<string, string> TokenDic = new Dictionary<string, string>();

            foreach (string placeHolder in placeHolderList)
            {
                if (!TokenDic.Keys.Contains(Parser.clean(placeHolder)) && !Parser.clean(placeHolder).Contains("Page."))
                    TokenDic.Add(Parser.clean(placeHolder), "");
            }

            List<InheritedTokenDTO> inheritedTokenList = componentEntity.getInheritedTokenList(componentDTO.InheritedTypeId);
            List<ComponentTokenDTO> componentTokenList = componentEntity.getComponentTokenList(componentId);

            foreach (KeyValuePair<string, string> tokenNameValue in TokenDic)
            {
                ComponentTokenDTO token = new ComponentTokenDTO();
                token.TokenName = tokenNameValue.Key;
                token.ComponentId = componentId;
                List<InheritedTokenDTO> inheritedTokenDTO = inheritedTokenList.Where(w => w.TokenName == tokenNameValue.Key).ToList();
                if (inheritedTokenDTO.Count>0)
                {
                    token.InheritedTokenId = inheritedTokenDTO.First().InheritedTokenId;
                    token.InheritedTokenValue = inheritedTokenDTO.First().TokenValue;
                    token.InheritedTypeId = inheritedTokenDTO.First().InheritedTypeId.Value;
                }

                List<ComponentTokenDTO> componentTokenDTO = componentTokenList.Where(w => w.TokenName == tokenNameValue.Key).ToList();
                if (componentTokenDTO.Count > 0)
                {
                    token.InheritedTokenId = componentTokenDTO.First().InheritedTokenId;
                    token.ComponentId = componentTokenDTO.First().ComponentId;
                    token.ComponentTokenId = componentTokenDTO.First().ComponentTokenId;
                    token.TokenValue = componentTokenDTO.First().TokenValue;
                    token.Overrided = true;
                }
                tokenList.Add(token);
            }

            return tokenList;
        }

        internal ComponentTokenDTO updateComponentToken(ComponentTokenDTO componentTokenDTO)
        {
            return componentEntity.updateComponentToken(componentTokenDTO);
        }

        public ComponentTokenDTO addComponentToken(ComponentTokenDTO componentTokenDTO)
        {
            return componentEntity.addComponentToken(componentTokenDTO);
        }

        public decimal changeTileName(decimal componentId,  string destTileName)
        {
             return componentEntity.changeTileName(componentId,destTileName);
        }

        public List<NavigationDTO> getComponentNavigationList(decimal componentId)
        {
            return componentEntity.getComponentNavigationList(componentId);
        }

        public ComponentTokenDTO deleteComponentToken(ComponentTokenDTO componentTokenDTO)
        {
            return componentEntity.deleteComponentToken(componentTokenDTO);
        }

        public ComponentTokenDTO saveComponentToken(ComponentTokenDTO componentTokenDTO)
        {
            ComponentTokenDTO componentTokenDTO1 = componentEntity.saveComponentToken(componentTokenDTO);
            return componentTokenDTO1;
        }

        public ComponentDTO updateComponentInfo(ComponentDTO componentDTO)
        {
            return componentDTO = componentEntity.updateComponentInfo(componentDTO);
        }
        public ComponentDTO cloneComponent(ComponentDTO componentDTO)
        {
            return componentDTO = componentEntity.cloneComponent(componentDTO);
        }

        public string renderComponent(ComponentDTO componentDTO,decimal sourcePageContentId)
        {
            string componentStr = "";
            if(componentDTO.RenderHTML ==null || componentDTO.RenderHTML =="")
            {
                componentStr = createRenderHTML(componentDTO, sourcePageContentId);
            }
            else
            {
                componentStr = componentDTO.RenderHTML;
            }
            return componentStr;
        }

        public string renderComponentEvent(decimal sourcePageContentId, ComponentDTO componentDTO)
        {
            return "***";
        }
        public string createRenderHTML( ComponentDTO componentDTO,decimal sourcePageContentId)
        {
            string componentStr = "";
            GenericTypeDTO genericTypeDTO = BLL.BLInheritedType.getGenericType(componentDTO.InheritedTypeId);
            List<string> cmpPlaceHolderList = Parser.getPlaceHolderList(genericTypeDTO.TokenizeString, Constant.pattern);
            Dictionary<string, string> tokenDic = new Dictionary<string, string>();

            List<ComponentTokenDTO> componentTokenList = BLL.BLComponent.getComponentTokenList(componentDTO.ComponentId);
            foreach (ComponentTokenDTO componentToken in componentTokenList)
            {
                if (!tokenDic.Keys.Contains(componentToken.TokenName))
                {
                    tokenDic[componentToken.TokenName] = componentToken.TokenValue;
                }
            }

            List<InheritedTokenDTO> inheritedTokenList = BLL.BLInheritedToken.getInheritedTokenList(componentDTO.InheritedTypeId);
            foreach (InheritedTokenDTO inheritedToken in inheritedTokenList)
            {
                if (!tokenDic.Keys.Contains(inheritedToken.TokenName))
                {
                    tokenDic[inheritedToken.TokenName] = inheritedToken.TokenValue;
                }
            }

            componentStr = genericTypeDTO.TokenizeString;
            foreach (string cmpPlaceHolder in cmpPlaceHolderList)
            {
                //if (Parser.clean(cmpPlaceHolder) == "ngClick")
                //{
                //componentStr = componentStr.Replace(cmpPlaceHolder, BLL.BLDesign.getNavigationDesign(sourcePageContentId, componentDTO.ComponentId));
                //}

                componentStr = componentStr.Replace("<<<ngClick>>>", "makeDesign_" + componentDTO.ComponentId + "()");

                //DesignDTO designDTO =  BLL.BLComponent.getComponentDesign(componentDTO, sourcePageContentId);
                //if(designDTO.DesignId >0)
                //    componentStr = componentStr.Replace("<<<ngClick>>>", "design_" + designDTO.DesignId + "(this)");

                if (tokenDic.Keys.Contains(Parser.clean(cmpPlaceHolder)))
                    componentStr = componentStr.Replace(cmpPlaceHolder, tokenDic[Parser.clean(cmpPlaceHolder)]);
                else
                    componentStr = componentStr.Replace(cmpPlaceHolder, "");
            }
            componentStr = Parser.removeUnUsableAttributes(componentStr);
            componentDTO.RenderHTML = componentStr;
            
            BLL.BLComponent.updateComponentRender(componentDTO);
            return componentStr;
        }

        public ComponentDTO saveComponentRenderHTML(decimal componentId, string renderHTML)
        {
            return componentEntity.saveComponentRenderHTML(componentId, renderHTML);
        }
        

        public DesignDTO getComponentDesign(ComponentDTO componentDTO,decimal sourcePageContentId)
        {
            return componentEntity.getComponentDesign(componentDTO, sourcePageContentId);
        }

        public void updateComponentRender(ComponentDTO componentDTO)
        {
            componentEntity.updateComponentRender(componentDTO);
        }

        public ComponentDTO getComponentInfo(decimal componentId)
        {
            return componentEntity.getComponentInfo(componentId);
        }

        public ComponentDTO saveComponent(decimal contentId,decimal inheritedTypeId,string tileName,string eventName,string eventFunction)
        {
            ComponentDTO componentDTO =  componentEntity.saveComponent(contentId,inheritedTypeId,tileName,eventName, eventFunction);
            return componentDTO;
        }


        public List<InheritedTypeDTO> searchComponentList(decimal projectId, string search)
        {
            return componentEntity.searchComponentList(projectId,search);
        }

        public ComponentDTO  deleteComponent(ComponentDTO componentDTO)
        {
            return componentEntity.deleteComponent(componentDTO.ComponentId);
        }

        public decimal deleteInheritedType(ComponentDTO componentDTO)
        {
            return componentEntity.deleteInheritedType(componentDTO);
        }

        public decimal saveComponentTokenList(decimal componentId, List<ComponentTokenDTO> componentTokenList)
        {
            return componentEntity.saveComponentTokenList(componentId, componentTokenList);
        }

        public int deleteComponentToken(int componentId)
        {
            return componentTokenEntity.deleteComponentToken(componentId);
        }
    }
}
