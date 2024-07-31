import { useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { Column } from '../../components';
import { initialData } from '../../helpers';
import { TColumn, TData, TTaskId } from '../../types';


export const Home = () => {
    const [state, setState] = useState(initialData)
    const column = state.columns[0];
    const tasks = state.tasks.filter( task => column.taskIds.includes( task.id ) );
    
    const onDragEnd = ( result: DropResult ) => {
        const { destination, source, draggableId } = result;

        if( !destination ){
            return;
        }

        if( destination.droppableId === source.droppableId && destination.index === source.index ){
            return;
        }
        const column = state.columns.find( element => element.id === source.droppableId );
        if( column ){
            const newTaskIds = Array.from( column.taskIds );
            newTaskIds.splice( source.index, 1 );

            newTaskIds.splice( destination.index, 0, draggableId as TTaskId );
            
            const newColumn: TColumn = {
                ...column,
                taskIds: newTaskIds
            };
            
            const newColumns = state.columns.map( col => 
                col.id === newColumn.id ? newColumn : col
            );

            const newState: TData = {
                ...state,
                columns: newColumns
            };
            
            setState(newState);
        }
        
    }


    return (
        <DragDropContext
            onDragEnd={ onDragEnd }
        >
            <Column column={ column } tasks={ tasks }/>
            {/* <Column columnId={ columns[1].id } title={ columns[1].title } tasks={ columns[1].tasks }/> */}
        </DragDropContext>
    )
}
