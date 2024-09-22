import { DragEvent } from 'react';
import { Container, Tile, Wrapper } from './state.styles';

interface IStateLayout {
  puzzleState: number[];
  isStatic: boolean;
  handleSwap: (dragIndex: number, dropIndex: number) => void;
}

export const StateLayout = ({ puzzleState, isStatic, handleSwap }: IStateLayout) => {
  const isStaticState = (value: any) => (!isStatic ? value : undefined);
  const handleDragStart = (index: number) => (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('dragIndex', index.toString());
  };

  const handleDrop = (index: number) => (event: DragEvent<HTMLDivElement>) => {
    const dragIndex = parseInt(event.dataTransfer.getData('dragIndex'), 10);
    handleSwap(dragIndex, index);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        {puzzleState.map((value, index) => (
          <Tile
            key={index}
            draggable={value !== 0}
            onDragStart={isStaticState(handleDragStart(index))}
            onDrop={isStaticState(handleDrop(index))}
            onDragOver={isStaticState(handleDragOver)}
          >
            {value !== 0 ? value : ''}
          </Tile>
        ))}
      </Wrapper>
    </Container>
  );
};
