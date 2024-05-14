import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ProjectType } from "../../types/Project";

interface ProjectItemProps {
  project: ProjectType;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  project
}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText>
          {project.name}
          <small>({project.projectKey})</small>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
 
export default ProjectItem;