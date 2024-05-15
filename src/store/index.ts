import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import ProjectsReducer from './ProjectsReducer'
import IssuesReducer from './IssuesReducer'
import ProjectUsersReducer from './ProjectUsersReducer'

const store = configureStore({
  reducer: {
    projects: ProjectsReducer,
    issues: IssuesReducer,
    projectUsers: ProjectUsersReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;
