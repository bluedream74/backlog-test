import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { getProjects } from "../store/ProjectsReducer";
import { Container } from "@mui/material";
import ProjectList from "../components/projects/ProjectList";

const ProjectPage = () => {
  const dispatch = useAppDispatch();

  const projects = useAppSelector((state) => state.projects.all);

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <ProjectList projects={projects} />
    </Container>
  );
}
 
export default ProjectPage;