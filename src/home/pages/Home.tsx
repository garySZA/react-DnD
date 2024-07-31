import { useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { Column } from '../../components';
import { initialData } from '../../helpers';
import { TColumn, TData, TTaskId } from '../../types';
import { TTask } from '../../types/types';

export const Home = () => {
    const [state, setState] = useState(initialData)        
    
    //* Aplicar efectos para cuando se realice la acción de Drag
    const onDragStart = () => {
        document.body.style.color = 'orange'
    }

    const onDragEnd = ( result: DropResult ) => {
        document.body.style.color = 'inherit'

        const { destination, source, draggableId } = result;

        if( !destination ) return;

        if( destination.droppableId === source.droppableId && destination.index === source.index ) return;

        const startColumn = state.columns.find( element => element.id === source.droppableId );
        const finishColumn = state.columns.find( element => element.id === destination.droppableId );

        if( !startColumn || !finishColumn ) return;
        
        if( startColumn === finishColumn ){
            const newTaskIds = Array.from( startColumn.taskIds );
            newTaskIds.splice( source.index, 1 );
            newTaskIds.splice( destination.index, 0, draggableId as TTaskId );

            const newColumn: TColumn = {
                ...startColumn,
                taskIds: newTaskIds
            };

            const newColumns = state.columns.map( col => col.id === newColumn.id ? newColumn : col );

            const newState: TData = {
                ...state,
                columns: newColumns
            };

            setState( newState );
        } else {
            const startTaskIds = Array.from( startColumn.taskIds );
            startTaskIds.splice( source.index, 1 );
            const newStartColumn: TColumn = {
                ...startColumn,
                taskIds: startTaskIds
            };

            const finishTaskIds = Array.from( finishColumn.taskIds );
            finishTaskIds.splice( destination.index, 0, draggableId as TTaskId );
            const newFinishColumn: TColumn = {
                ...finishColumn,
                taskIds: finishTaskIds
            };

            const newColumns = state.columns.map( col => {
                if( col.id === newStartColumn.id ) return newStartColumn;
                if( col.id === newFinishColumn.id ) return newFinishColumn;
                return col;
            });

            const newState: TData = {
                ...state,
                columns: newColumns
            };

            setState( newState );
        }
    }

    return (
        <DragDropContext
            onDragEnd={ onDragEnd }
            onDragStart={ onDragStart }
        >
            {
                state.columnOrder.map( columnId => {
                    const column = state.columns.find( element => element.id === columnId );

                    if( column ){
                        const tasks = column.taskIds.map( taskId => state.tasks.find( task => task.id === taskId))
                                        .filter(( task ): task is TTask => task !== undefined )
                        return tasks &&  <Column key={ column?.id } column={ column! } tasks={ tasks }/>
                        
                        

                    }

                })
            }
            {/* <Column columnId={ columns[1].id } title={ columns[1].title } tasks={ columns[1].tasks }/> */}
        </DragDropContext>
    )
}
