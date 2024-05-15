import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ProjectType } from "../../types/Project";
import { useNavigate } from "react-router-dom";

interface ProjectItemProps {
  project: ProjectType;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  project
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/projects/${project.id}`);
  }

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemText>
          {project.name}
          <small>({project.projectKey})</small>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default ProjectItem;
