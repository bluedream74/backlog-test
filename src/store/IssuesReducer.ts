import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosTokenApi } from "../utils/axios";
import { Issue } from "../types/Issues";

interface StateProps {
  all: Issue[];
  selected: Issue | null;
  status: "idle" | "loading" | "failed"
}

const initialState: StateProps = {
  all: [],
  selected: null,
  status: "idle"
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIssues.fulfilled, (state, action) => {
        state.status = "idle";
        state.all = action.payload;
      })
      .addCase(getIssues.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getIssues.rejected, (state) => {
        state.status = "failed";
        state.all = [];
      });

    builder
      .addCase(addIssue.fulfilled, (state, action) => {
        state.all = [...state.all, action.payload];
        state.status = "idle";
      })
      .addCase(addIssue.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addIssue.rejected, (state) => {
        state.status = "failed";
      })
  }
});

export const getIssues = createAsyncThunk(
  'issues/getAll',
  async () => {
    const response = await axiosTokenApi.get('/api/v2/issues');
    return response.data;
  }
);

export const addIssue = createAsyncThunk(
  'issues/add',
  async ({name, key}: { name: string; key: string}) => {
    const response = await axiosTokenApi.post('/api/v2/issues', {
      name: name,
      key: key
    });
    return response.data
  }
);

export default issuesSlice.reducer;
