import { TData } from '../types';

export const initialData: TData = {
    tasks: [
        {
            id: 'task-1',
            content: 'content-1'
        },
        {
            id: 'task-2',
            content: 'content-2'
        },
        {
            id: 'task-3',
            content: 'content-3'
        },
        {
            id: 'task-4',
            content: 'content-4'
        },
        {
            id: 'task-5',
            content: 'content-5'
        },
        {
            id: 'task-6',
            content: 'content-6'
        }
    ],
    columns: [
        {
            id: 'column-1',
            title: 'To Do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        {
            id: 'column-2',
            title: 'In Progress',
            taskIds: ['task-5', 'task-6']
        }
    ],
    columnOrder: ['column-1', 'column-2']
};