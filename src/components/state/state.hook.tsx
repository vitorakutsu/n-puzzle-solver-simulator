import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

interface IStateHook {
  puzzleState: number[];
  handleSwap: (dragIndex: number, dropIndex: number) => void;
}

export const useStateHook = (): IStateHook => {
  const toast = useToast();
  const [puzzleState, setPuzzleState] = useState([1, 2, 3, 4, 5, 6, 7, 8, 0]);

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
      const newState = [...puzzleState];
      [newState[dragIndex], newState[dropIndex]] = [newState[dropIndex], newState[dragIndex]];
      setPuzzleState(newState);
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

  return { puzzleState, handleSwap };
};
