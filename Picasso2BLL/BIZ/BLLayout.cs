using System.Collections.Generic;
using Picasso2.Entity;
using Picasso2.DTO;
using Picasso2.BLL.Kernel;

namespace Picasso2.BLL.BIZ
{
    public class BLLayout
    {
        LayoutEntity layoutEntity = new LayoutEntity();
        ComponentEntity componentEntity = new ComponentEntity();
        public int saveLayout(decimal projectId, string layoutName, string tokenizeString)
        {
            return layoutEntity.saveLayout(projectId, layoutName, tokenizeString);
        }

        public LayoutDTO getSmallLayoutInfo(decimal contentId, decimal? layoutId)
        {
            LayoutDTO layoutDTO = layoutEntity.getLayoutInfo(layoutId);
            layoutDTO.LayoutHTML = "";
            layoutDTO.TokenizeString = "";
            return layoutDTO;
        }
        public LayoutDTO getLayoutInfo(decimal contentId, decimal? layoutId)
        {
            return layoutEntity.getLayoutInfo(layoutId); ;
        }

        private string createFiledSet(decimal pageContentId, string tileName)
        {
            string tileInnerHTML = "";
            List<ComponentDTO> componentList = BLL.BLComponent.getPageContentComponentList(pageContentId, tileName);

            tileInnerHTML += "<div flex=\"1\" class=\"borderLess\" ng-click=\"selectTile('"+ tileName + "')\" " +
                        " layout-wrap layout-wrap ng-drop=\"true\" ng-drop-success=\"onDropComplete($event,'" + tileName + "')\">"+ tileName;

            foreach (ComponentDTO componentDTO in componentList)
            {
                tileInnerHTML += "<div layout-row layout-wrap class=\"firstChar\" md-colors=\"{background:'default-accent-500-1'}\" ng-drag=\"true\" ng-drag-data=\"obj\"" +
                    " ng-drag-success=\"onDragSuccess('"+ componentDTO .ComponentId+ "',$event,'"+tileName+"');\" >";
                tileInnerHTML += "<md-tooltip>"+ componentDTO.InheritedType.Title + "</md-tooltip>";
                tileInnerHTML += componentDTO.InheritedType.Title[0].ToString().ToUpper();
                tileInnerHTML += "</div>";
            }

            tileInnerHTML += "</div>";
            return tileInnerHTML;
        }

        public LayoutDTO getLayoutWithHTML(decimal pageContentId, decimal layoutId)
        {
            LayoutDTO layoutDTO = layoutEntity.getLayoutInfo(layoutId);
            List<string> placeHolderList = Parser.getPlaceHolderList(layoutDTO.TokenizeString, Constant.pattern);
            string TokenizeString = layoutDTO.TokenizeString;

            foreach (var placeHolder in placeHolderList)
            {
                string tileName = Parser.clean(placeHolder);
                string fieldSetHTML =  createFiledSet(pageContentId,tileName);
                TokenizeString = TokenizeString.Replace(placeHolder, fieldSetHTML);
            }

            layoutDTO.LayoutHTML = TokenizeString;
            layoutDTO.TokenizeString = "";
            return layoutDTO;
        }

        public List<TileDTO> moveComponentTile(decimal layoutId,decimal contentId, decimal componentId, string destTileName)
        {
            BLL.BLComponent.changeTileName(componentId,destTileName);
            return getTileList(layoutId,contentId);
        }

        public List<TileDTO> getTileList(decimal layoutId,decimal pageContentId)
        {
            List<TileDTO> tileList = new List<TileDTO>();
            LayoutDTO layoutDTO = layoutEntity.getLayoutInfo(layoutId);
            List<string> list = Parser.getPlaceHolderList(layoutDTO.TokenizeString, Constant.pattern);
            foreach (string tile in list)
            {
                TileDTO tileDTO = new TileDTO();
                tileDTO.tileName = Parser.clean(tile);
                tileDTO.componentList = componentEntity.getPageContentComponentList(pageContentId,Parser.clean(tile));
                tileList.Add(tileDTO);
            }
            return tileList;
        }
        

        public LayoutDTO saveLayoutInfo(LayoutDTO layoutDTO)
        {
            return layoutEntity.saveLayoutInfo(layoutDTO);
        }

        public List<LayoutDTO> getLayoutList(decimal projectId)
        {
            return layoutEntity.getLayoutList(projectId);
        }
    }
}
