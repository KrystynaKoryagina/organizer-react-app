import { ITag } from './Tag';

export interface ITask {
    id: string;
    title: string;
    created: string;
    deadline: string;
    description: string;
    completed?: boolean;
    tag: ITag;
}

export interface ITasksResponse {
    data: ITask[];
}

export interface ITaskResponse {
    data: ITask;
}

export interface ITaskRequest {
    title: string;
    deadline: string;
    description: string;
    completed: boolean;
    tag: string;
}
