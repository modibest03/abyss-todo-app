import axios, { AxiosInstance, AxiosResponse } from 'axios';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';
import { setTasks } from '../redux/appSlice';
import { useEffect } from 'react';
import { TasksDataType, TasksResponseType } from './types';

const API: AxiosInstance = axios.create({
  baseURL: process.env.URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const fetcher = (url: string) => API.get(url).then((res) => res.data);

export const useTasks = (): TasksResponseType => {
  const dispatch = useDispatch();
  const { data, error } = useSWR<TasksDataType[], Error | undefined>(
    '/',
    fetcher
  );

  useEffect(() => {
    if (data) {
      dispatch(setTasks(data));
    }
  }, [data, dispatch]);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export const editTask = (
  id: string,
  data: object
): Promise<AxiosResponse<any, any>> => API.put(`/${id}`, data);

export const AddTask = (data: object): Promise<AxiosResponse<any, any>> =>
  API.post('/', data);

export const deleteTask = (id: string): Promise<AxiosResponse<any, any>> =>
  API.delete(`/${id}`);
