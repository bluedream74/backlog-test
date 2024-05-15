import { Avatar, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ProjectUser } from "../../types/Project";

interface ProjectUserTableProps {
  users: ProjectUser[];
}

const ProjectUserTable: React.FC<ProjectUserTableProps> = ({
  users
}) => {
  return (
    <Box
      sx={{ width: '100%' }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">お名前</TableCell>
              <TableCell align="center">メイルアドレス</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={`user ${user.id}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  <div className="flex items-center gap-2">
                    <Avatar alt={user.name} src={user.nulabAccount.iconUrl} />
                    {user.name}
                  </div>
                </TableCell>
                <TableCell align="center">{user.mailAddress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ProjectUserTable;
