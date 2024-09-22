import { useStateHook } from './state.hook';
import { StateLayout } from './state.layout';

interface IState {
  puzzleState?: number[];
  onChangePuzzleState?: (newPuzzleState: number[]) => void;
  isStatic?: boolean;
}

export const State = ({ isStatic = false, onChangePuzzleState, puzzleState }: IState) => {
  const properties = useStateHook({ onChangePuzzleState, puzzleState });

  return <StateLayout isStatic={isStatic} {...properties} />;
};
