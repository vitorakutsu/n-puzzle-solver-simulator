import { useStateHook } from './state.hook';
import { StateLayout } from './state.layout';

interface IState {
  isStatic?: boolean;
  puzzleState?: number[];
  toShuffle?: boolean;
  onChangePuzzleState?: (newPuzzleState: number[]) => void;
}

export const State = ({ isStatic = false, puzzleState, toShuffle, onChangePuzzleState }: IState) => {
  const properties = useStateHook({ puzzleState, toShuffle, onChangePuzzleState });

  return <StateLayout isStatic={isStatic} {...properties} />;
};
