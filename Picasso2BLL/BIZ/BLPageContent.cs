using Picasso2.Entity;
using Picasso2.DTO;
using System;

namespace Picasso2.BLL.BIZ
{
    public class BLPageContent
    {
        PageContentEntity pageContentEntity = new PageContentEntity();
        public ContentDTO getContent(decimal sourcePageContentId, decimal pageContentId)
        {
            return pageContentEntity.getContent(sourcePageContentId,pageContentId);
        }
        public ContentDTO getContent(decimal pageContentId)
        {
            return pageContentEntity.getContent(pageContentId);
        }
        public PageDTO getPage(decimal pageContentId)
        {
            return pageContentEntity.getPage(pageContentId);
        }

        public ContentDTO SavePageContentInfo(ContentDTO contentDTO)
        {
            return pageContentEntity.SavePageContentInfo(contentDTO);
        }

        public ContentDTO paste(ContentDTO contentDTO, decimal pageId)
        {
            return pageContentEntity.paste(contentDTO, pageId);
        }
    }
}
