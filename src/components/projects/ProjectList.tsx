import { Box, List } from "@mui/material";
import { ProjectType } from "../../types/Project";
import ProjectItem from "./ProjectItem";

interface ProjectListProps {
  projects: ProjectType[];
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects
}) => {
  return (
    <Box
      sx={{ width: '100%', maxWidth: 'xl' }}
    >
      <List>
        {projects && (
          projects.map((project, index) => (
            <ProjectItem key={`project ${index}`} project={project} />
          ))
        )}
      </List>
    </Box>
  );
}
 
export default ProjectList;