export type TTaskId = string;

export type TTask = {
    id: TTaskId;
    content: string;
}

export type TColumnId = string;

export type TColumn = {
    id: TColumnId;
    title: string;
    taskIds: TTaskId[];
}

export type TData = {
    tasks: TTask[];
    columns: TColumn[];
    columnOrder: TColumnId[];
}

export type TDroppableItem = {
    droppableId: TColumnId;
    index: number;
}

export type TDnDResult = {
    draggableId: TTaskId;
    type: string;
    reason: 'DROP',
    source: TDroppableItem,
    destination: TDroppableItem | null,
}