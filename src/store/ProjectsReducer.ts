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
      })
  }
});

export const getProjects = createAsyncThunk(
  'projects/getAll',
  async () => {
    const response = await axiosTokenApi.get('/api/v2/projects');
    return response.data;
  }
)

export default projectsSlice.reducer;
