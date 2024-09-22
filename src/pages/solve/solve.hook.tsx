import { useEffect, useRef, useState } from 'react';
import { aStarSearch } from '~/hooks/a*';
import { Algorithm, ISolve, ISolveState, IShuffleState, SolveSteps, State, IInfoState } from './types';

const INITIAL_STATE = {
  final: [1, 2, 3, 4, 5, 6, 7, 8, 0],
  initial: [1, 2, 3, 4, 5, 6, 7, 8, 0],
  algorithm: 'A*' as Algorithm,
};

const INITIAL_SHUFFLE_STATE = {
  final: false,
  initial: false,
};

export const useSolve = (): ISolve => {
  const [step, setStep] = useState(SolveSteps.FINAL_STATE);
  const [state, setState] = useState<ISolveState>(INITIAL_STATE);
  const [shuffle, setShuffle] = useState<IShuffleState>(INITIAL_SHUFFLE_STATE);
  const [result, setResult] = useState<IInfoState>({
    path: [],
    steps: 0,
    time: 0,
    algorithm: state.algorithm,
  });

  const currentStepRef = useRef(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const onChangeStep = (newStep: SolveSteps) => {
    if (newStep === SolveSteps.INITIAL_STATE) setState({ ...state, initial: state.final });
    if (newStep === SolveSteps.FINAL_STATE) {
      setState(INITIAL_STATE);
      setShuffle(INITIAL_SHUFFLE_STATE);
    }
    setStep(newStep);
  };

  const onChangeState = (type: State, newState: number[]) => {
    if (type === 'final') setState({ ...state, final: newState });
    if (type === 'initial') setState({ ...state, initial: newState });
  };

  const handleShuffle = (type: State) => {
    setShuffle({ ...shuffle, [type]: true });
    setTimeout(() => {
      setShuffle({ ...shuffle, [type]: false });
    }, 5000);
  };

  const onSelectAlgorithm = (algorithm: string) => {
    setState({ ...state, algorithm: algorithm as Algorithm });
  };

  const handleSolve = async () => {
    onChangeStep(SolveSteps.PROCESSING);

    await new Promise<{ path: number[][]; steps: number; time: number }>((resolve) => {
      const { path, steps, time } = aStarSearch(state.initial, state.final);
      setResult({ path, steps, time, algorithm: state.algorithm });
      resolve({ path, steps, time });
    }).finally(() => {
      setTimeout(() => {
        onChangeStep(SolveSteps.RESULT);
      }, 3000);
    });
  };

  const onStepByStep = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    currentStepRef.current = 0;

    if (result.path.length > 0) {
      intervalIdRef.current = setInterval(() => {
        if (currentStepRef.current < result.path.length) {
          onChangeState('initial', result.path[currentStepRef.current]);
          currentStepRef.current += 1;
        } else {
          clearInterval(intervalIdRef.current!);
        }
      }, 500);
    }
  };

  return {
    step,
    state,
    shuffle,
    info: result,
    onChangeStep,
    onChangeState,
    onSelectAlgorithm,
    handleShuffle,
    handleSolve,
    onStepByStep,
  };
};
