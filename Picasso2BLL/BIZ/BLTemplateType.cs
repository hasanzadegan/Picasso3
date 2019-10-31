using Picasso2.Entity;
using Picasso2.DTO;
using System;

namespace Picasso2.BLL.BIZ
{
    public class BLTemplateType
    {
        TemplateTypeEntity templateTypeEntity = new TemplateTypeEntity();

        public TemplateTypeDTO getTemplateType(decimal templateId) {
            TemplateTypeDTO templateTypeDTO = templateTypeEntity.getTemplateType(templateId);
            return templateTypeDTO;
        }

        public TemplateTypeDTO getProjectTemplateType(decimal? projectId)
        {
            return templateTypeEntity.getProjectTemplateType(projectId);
        }

        public TemplateTypeDTO getTypeByName(string templateTypeName)
        {
            return templateTypeEntity.getTypeByName(templateTypeName);
        }
    }
}
