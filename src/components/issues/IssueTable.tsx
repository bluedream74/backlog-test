import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Issue } from "../../types/Issues";

interface IssueTableProps {
  issues: Issue[];
}

const IssueTable: React.FC<IssueTableProps> = ({
  issues
}) => {
  return (
    <Box
      sx={{ 
        width: '100%',
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">種別</TableCell>
              <TableCell align="center">キー</TableCell>
              <TableCell align="center">件名</TableCell>
              <TableCell align="center">担当者</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {issues.map((issue) => (
              <TableRow
                key={`issue ${issue.id}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {issue.issueType.name}
                </TableCell>
                <TableCell align="center">{issue.issueKey}</TableCell>
                <TableCell align="center">{issue.summary}</TableCell>
                <TableCell align="center">{issue.assignee.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default IssueTable;
