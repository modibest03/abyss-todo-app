import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TasksDataType, appState } from '../utils/types';

const initialState: appState = {
  tasks: [],
  themeMode: true,
  sortView: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<TasksDataType[] | undefined>) => {
      state.tasks = action.payload;
    },
    setThemeMode: (state) => {
      state.themeMode = !state.themeMode;
    },
    setSortView: (state) => {
      state.sortView = !state.sortView;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      if (action.payload === 'long-to-short') {
        state.tasks =
          state.tasks &&
          state.tasks.sort(
            (lengthA, lengthB) =>
              lengthB.task_content.length - lengthA.task_content.length
          );
      }

      if (action.payload === 'short-to-long') {
        state.tasks =
          state.tasks &&
          state.tasks.sort(
            (lengthA, lengthB) =>
              lengthA.task_content.length - lengthB.task_content.length
          );
      }

      if (action.payload === 'alphabetic-a-z') {
        state.tasks =
          state.tasks &&
          state.tasks.sort((alphA, alphB) =>
            alphA.task_content
              .toLowerCase()
              .localeCompare(alphB.task_content.toLocaleLowerCase())
          );
      }

      if (action.payload === 'alphabetic-z-a') {
        state.tasks =
          state.tasks &&
          state.tasks.sort((alphA, alphB) =>
            alphB.task_content
              .toLowerCase()
              .localeCompare(alphA.task_content.toLocaleLowerCase())
          );
      }

      if (action.payload === 'date') {
        state.tasks =
          state.tasks &&
          state.tasks.sort(
            (lengthA, lengthB) => lengthB.createdAt - lengthA.createdAt
          );
      }
    },
  },
});

export const { setTasks, setThemeMode, setSortView, setSortBy } =
  appSlice.actions;

export default appSlice.reducer;
