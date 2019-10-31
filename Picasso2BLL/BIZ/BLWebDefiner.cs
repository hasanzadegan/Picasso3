using System.Collections.Generic;
using Picasso2.Entity;
using Picasso2.DTO;

namespace Picasso2.BLL.BIZ
{
    public class BLWebDefiner
    {
        WebDefinerEntity webDefinerEntity = new WebDefinerEntity();
        public WebDefinerDTO getWebDefinerInfo(decimal? webDefinerId)
        {
            return webDefinerEntity.getWebDefinerInfo(webDefinerId);
        }

        public List<WebDefinerDTO> getComponentListWebDefiner(decimal pageId)
        {
            return webDefinerEntity.getComponentListWebDefiner(pageId);
        }
        public List<WebDefinerDTO> getComponentListWebDefinerForPageContent(decimal pageContentId)
        {
            return webDefinerEntity.getComponentListWebDefinerForPageContent(pageContentId);
        }
    }
}
