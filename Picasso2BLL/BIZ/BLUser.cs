using System.Collections.Generic;
using Picasso2.Entity;
using Picasso2.DTO;

namespace Picasso2.BLL.BIZ
{
    public class BLUser
    {
        UserEntity userEntity = new UserEntity();

        public List<ProjectDTO> getProjectList(decimal userId)
        {
            return userEntity.getProjectList(userId);
        }

        public List<ProjectDTO> getProjectListSummary(decimal userId)
        {
            List<ProjectDTO> projectList = getProjectList(userId);
            foreach (ProjectDTO projectDTO in projectList)
            {
                projectDTO.pageList = BLL.BLProject.getPageList(projectDTO.ProjectId);
            }
            return projectList;
        }

        public decimal addNewProject(decimal userId)
        {
            return userEntity.addNewProject(userId);
        }

        public int deleteProject(decimal projectId)
        {
            return userEntity.deleteProject(projectId);
        }
    }
}
