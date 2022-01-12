export interface TasksDataType {
  createdAt: number;
  id: string;
  status: boolean;
  task_content: string;
  updatedAt: number;
}

export interface TasksResponseType {
  data?: TasksDataType[] | undefined;
  isLoading: boolean;
  error: Error | undefined;
}

export interface appState {
  tasks: TasksDataType[] | undefined;
  themeMode: boolean;
  sortView: boolean;
}

export interface TaskTypes {
  id: string;
  status: boolean;
  task: string;
  editTodoStatus: (status: boolean, id: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
}

export interface StyledTypes {
  readonly done?: boolean;
}

export interface ThemeTypes {
  children: JSX.Element | JSX.Element[];
}
