import { Button, Container, FormControl, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { useAppDispatch } from "../store";
import { addProject } from "../store/ProjectsReducer";
import { useNavigate } from "react-router-dom";

const NewProjectPage = () => {
  const naviate = useNavigate();

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: '',
    key: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addProject(formData))
      .then(() => {
        naviate('/projects');
      });
  }

  return (
    <Container>
      <FormControl fullWidth component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="key"
          label="Key"
          name="key"
          autoComplete="key"
          value={formData.key}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, width: 150 }}
          startIcon={<Add />}
        >
          Sign Up
        </Button>
      </FormControl>
    </Container>
  );
}

export default NewProjectPage;