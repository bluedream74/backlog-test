import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosTokenApi } from "../utils/axios";
import { ProjectUser } from "../types/Project";

interface StateProps {
  all: ProjectUser[];
  selected: ProjectUser | null;
  status: "idle" | "loading" | "failed"
}

const initialState: StateProps = {
  all: [],
  selected: null,
  status: "idle"
};

const projectUsersSlice = createSlice({
  name: 'projectUsers',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjectUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.all = action.payload;
      })
      .addCase(getProjectUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProjectUsers.rejected, (state) => {
        state.status = "failed";
        state.all = [];
      });
  }
});

export const getProjectUsers = createAsyncThunk(
  'projectUsers/getAll',
  async (projectId: number) => {
    const response = await axiosTokenApi.get(`/api/v2/projects/${projectId}/users`);
    return response.data;
  }
);

export default projectUsersSlice.reducer;
