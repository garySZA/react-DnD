export type TTaskId = `task-${number}`;

export type TTask = {
    id: TTaskId;
    content: string;
}

export type TColumnId = `column-${number}`;

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