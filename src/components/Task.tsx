import { Draggable } from '@hello-pangea/dnd';
import styled from 'styled-components';
import { TTask } from '../types';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white;
`;

interface ITaskProps {
    task: TTask;
    index: number;
}

export const Task = ({ task, index }: ITaskProps) => {
    
    return (
        <Draggable draggableId={ task.id } index={ index }>
            {
                provided => (
                    <Container
                        { ...provided.draggableProps }
                        { ...provided.dragHandleProps }
                        ref={ provided.innerRef }
                    >
                        { task.content }
                    </Container>
                )
            }
        </Draggable>
    )
}
