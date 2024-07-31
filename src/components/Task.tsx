import { Draggable } from '@hello-pangea/dnd';
import styled from 'styled-components';

import { TTask } from '../types';
import './styles.css'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    display: flex;
`;

const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: tomato;
    border-radius: 4px;
    margin-right: 8px;
`;

interface ITaskProps {
    task: TTask;
    index: number;
}

export const Task = ({ task, index }: ITaskProps) => {
    
    return (
        <Draggable draggableId={ task.id } index={ index }>
            {
                ( provided, snapshot ) =>                                   
                    <Container
                        
                        { ...provided.draggableProps }
                        ref={ provided.innerRef }
                        data-dragging={ snapshot.isDragging }
                    >
                        <Handle { ...provided.dragHandleProps }/>
                        { task.content }
                    </Container>
                
            }
        </Draggable>
    )
}
