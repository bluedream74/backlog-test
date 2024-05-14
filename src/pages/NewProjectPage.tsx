import { Container, TextField } from "@mui/material";

const NewProjectPage = () => {
  return (
    <Container>
      <div className="p-8 flex justify-center flex-col gap-8">
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Key"
        />
      </div>
    </Container>
  );
}
 
export default NewProjectPage;