import { Droppable } from '@hello-pangea/dnd';
import styled from 'styled-components';

import { TColumn, TTask } from '../types';
import { Task } from './Task';

import './styles.css'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
`;

interface IColumnProps {
    column: TColumn
    tasks: TTask[];
}

export const Column = ({ column, tasks }: IColumnProps) => {
    return (
        <Container>
            <Title>{ column.title }</Title>
            <Droppable droppableId={ column.id }>
                {
                    ( provided, snapshot )  => (
                        <TaskList
                            ref={ provided.innerRef }
                            { ...provided.droppableProps }
                            data-dropping={ snapshot.isDraggingOver }
                        >
                            {
                                tasks.map(( task, index ) => (
                                    <Task key={ task.id } task={ task } index={ index } />
                                ))
                            }
                            { provided.placeholder }
                        </TaskList>
                    )
                }
            </Droppable>
        </Container>
    )
}
