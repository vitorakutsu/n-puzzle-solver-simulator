import { useState } from 'react';
import { SolveSteps } from './types';
import { initial } from 'lodash';

interface ISolve {
  step: SolveSteps;
  state: ISolveState;
  onChangeStep: (step: SolveSteps) => void;
  onChangeState: (type: State, newState: number[]) => void;
  onSelectAlgorithm: (algorithm: Algorithm) => void;
}

type Algorithm = 'A*' | 'BFS' | 'DFS';
type State = 'final' | 'initial';

interface ISolveState {
  final: number[];
  initial: number[];
  algorithm: Algorithm;
}

const INITIAL_STATE = {
  final: [1, 2, 3, 4, 5, 6, 7, 8, 0],
  initial: [1, 2, 3, 4, 5, 6, 7, 8, 0],
  algorithm: 'A*' as Algorithm,
};

export const useSolve = (): ISolve => {
  const [step, setStep] = useState(SolveSteps.FINAL_STATE);
  const [state, setState] = useState<ISolveState>(INITIAL_STATE);

  const onChangeStep = (newStep: SolveSteps) => {
    setStep(newStep);
  };

  const onChangeState = (type: State, newState: number[]) => {
    if (type === 'final') setState({ ...state, final: newState });
    if (type === 'initial') setState({ ...state, initial: newState });
  };

  const onSelectAlgorithm = (algorithm: Algorithm) => {
    setState({ ...state, algorithm });
  };

  return {
    step,
    state,
    onChangeStep,
    onChangeState,
    onSelectAlgorithm,
  };
};
