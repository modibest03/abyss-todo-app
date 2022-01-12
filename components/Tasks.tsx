import { CgArrowsBreakeV } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';
import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import { setSortView } from '../redux/appSlice';
import { RootState } from '../redux/store';
import { useSWRConfig } from 'swr';
import { AddTask, deleteTask, editTask, useTasks } from '../utils/api';
import { useToast } from '@chakra-ui/react';
import { useToasts } from 'react-toast-notifications';
import { useState } from 'react';
import {
  StyledAddTaskContainer,
  StyledButton,
  StyledContainer,
  StyledHeader,
  StyledHeaderText,
  StyledInput,
  StyledSortContainer,
} from './StyledTasks';

const Tasks = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { tasks } = useSelector((state: RootState) => state.app);
  const date = new Date();
  const { mutate } = useSWRConfig();
  const { data } = useTasks();
  const [task, setTask] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const editTodoStatus = async (status: boolean, id: string): Promise<void> => {
    const updatedTask = data?.map((el) =>
      el.id === id ? { ...el, status: !status } : el
    );
    mutate('/', updatedTask, false);
    try {
      await editTask(id, { status: !status, updatedAt: date.getTime() });
      mutate('/');
      addToast('Successfully modify todo', {
        appearance: 'success',
      });
    } catch (error) {
      mutate('/', data, false);
      addToast('Modify todo fail! Something went wrong', {
        appearance: 'error',
      });
    }
  };

  const deleteTodo = async (id: string): Promise<void> => {
    const updatedTask = data?.filter((el) => el.id !== id);
    mutate('/', updatedTask, false);
    try {
      await deleteTask(id);
      mutate('/');
      addToast('Successfully deleted task', {
        appearance: 'success',
      });
    } catch (error) {
      mutate('/', data, false);
      addToast('deleting task failed! Something went wrong', {
        appearance: 'error',
      });
    }
  };

  const addTodo = async (e: any): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const newData = {
      task_content: task,
      createdAt: date.getTime(),
      updatedAt: date.getTime(),
      status: false,
      id: `${tasks && tasks.length + 1}`,
    };

    let updatedTask;
    if (data) {
      updatedTask = [...data, newData];
    }

    mutate('/', updatedTask, false);
    setTask('');

    try {
      await AddTask(newData);
      mutate('/');
      addToast('Successfully add task', {
        appearance: 'success',
      });
    } catch (error) {
      mutate('/', data, false);
      addToast('Adding task failed! Something went wrong', {
        appearance: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledHeaderText>{date.toDateString()}</StyledHeaderText>
        <StyledSortContainer onClick={() => dispatch(setSortView())}>
          <span>Sort</span>
          <CgArrowsBreakeV />
        </StyledSortContainer>
      </StyledHeader>
      <StyledAddTaskContainer onSubmit={addTodo}>
        <AiOutlinePlus />
        <StyledInput
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Add task'
          required
        />
        <StyledButton type='submit' disabled={loading}>
          Add
        </StyledButton>
      </StyledAddTaskContainer>

      {tasks && (
        <>
          {tasks.map(({ task_content, id, status }, index) => (
            <Task
              key={index}
              task={task_content}
              id={id}
              status={status}
              editTodoStatus={editTodoStatus}
              deleteTodo={deleteTodo}
            />
          ))}
        </>
      )}
    </StyledContainer>
  );
};

export default Tasks;
