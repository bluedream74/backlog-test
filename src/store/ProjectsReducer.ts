import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProjectType } from "../types/Project";
import { axiosTokenApi } from "../utils/axios";

interface StateProps {
  all: ProjectType[];
  selected: ProjectType | null;
  status: "idle" | "loading" | "failed"
}

const initialState: StateProps = {
  all: [],
  selected: null,
  status: "idle"
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.fulfilled, (state, action) => {
        state.status = "idle";
        state.all = action.payload;
      })
      .addCase(getProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProjects.rejected, (state) => {
        state.status = "failed";
        state.all = [];
      });

    builder
      .addCase(addProject.fulfilled, (state, action) => {
        state.all = [...state.all, action.payload];
        state.status = "idle";
      })
      .addCase(addProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProject.rejected, (state) => {
        state.status = "failed";
      })
  }
});

export const getProjects = createAsyncThunk(
  'projects/getAll',
  async () => {
    const response = await axiosTokenApi.get('/api/v2/projects');
    return response.data;
  }
);

export const addProject = createAsyncThunk(
  'projects/add',
  async ({name, key}: { name: string; key: string}) => {
    const response = await axiosTokenApi.post('/api/v2/projects', {
      name: name,
      key: key
    });
    return response.data
  }
);

export default projectsSlice.reducer;
