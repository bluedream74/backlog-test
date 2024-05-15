import { Container, Grid } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { getIssues } from "../store/IssuesReducer";
import { getProjectUsers } from "../store/ProjectUsersReducer";
import { useParams } from "react-router-dom";
import IssueTable from "../components/issues/IssueTable";
import ProjectUserTable from "../components/projects/ProjectUserTable";

const ProjectDetailPage = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const issues = useAppSelector((state) => state.issues.all);
  const projectUsers = useAppSelector((state) => state.projectUsers.all)


  useEffect(() => {
    dispatch(getIssues());
    dispatch(getProjectUsers(parseInt(id!)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth={"xl"}>
      <Grid container spacing={2} sx={{ paddingY: 4 }}>
        <Grid item xs={6}>
          <IssueTable issues={issues} />
        </Grid>
        <Grid item xs={6}>
          <ProjectUserTable users={projectUsers} />
        </Grid>
      </Grid>
    </Container>
  );
}
 
export default ProjectDetailPage;