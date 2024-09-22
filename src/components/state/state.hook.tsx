import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface IStateHook {
  puzzleState: number[];
  handleSwap: (dragIndex: number, dropIndex: number) => void;
}

interface IState {
  puzzleState?: number[];
  onChangePuzzleState?: (newPuzzleState: number[]) => void;
  toShuffle?: boolean;
}

export const useStateHook = ({ onChangePuzzleState, puzzleState, toShuffle }: IState): IStateHook => {
  const toast = useToast();

  useEffect(() => {
    toShuffle && handleShuffle();
  }, [toShuffle]);

  const isValidMovement = (dragIndex: number, dropIndex: number): boolean => {
    const movements = [
      [1, 3],
      [0, 2, 4],
      [1, 5],
      [0, 4, 6],
      [1, 3, 5, 7],
      [2, 4, 8],
      [3, 7],
      [4, 6, 8],
      [5, 7],
    ];

    return movements[dragIndex].includes(dropIndex);
  };

  const handleSwap = (dragIndex: number, dropIndex: number) => {
    if (isValidMovement(dragIndex, dropIndex)) {
      const newState = [...(puzzleState ?? [])];
      [newState[dragIndex], newState[dropIndex]] = [newState[dropIndex], newState[dragIndex]];
      onChangePuzzleState && onChangePuzzleState(newState);
    } else {
      toast({
        title: 'Movimento inválido',
        description: 'Você só pode mover as peças adjacentes ao espaço vazio',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleShuffle = () => {
    let newState = [...(puzzleState ?? [])];
    const emptyIndex = newState.indexOf(0);

    for (let i = 0; i < 50; i++) {
      const possibleMoves = [
        [1, 3],
        [0, 2, 4],
        [1, 5],
        [0, 4, 6],
        [1, 3, 5, 7],
        [2, 4, 8],
        [3, 7],
        [4, 6, 8],
        [5, 7],
      ][newState.indexOf(0)];

      const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      [newState[emptyIndex], newState[randomMove]] = [newState[randomMove], newState[emptyIndex]];
    }

    onChangePuzzleState && onChangePuzzleState(newState);
  };

  return {
    puzzleState: puzzleState ?? [1, 2, 3, 4, 5, 6, 7, 8, 0],
    handleSwap,
  };
};
