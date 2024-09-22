import { ReactElement } from 'react';
import { Screen } from '~/components/screen/screen';
import { SolveAlgorithmLayout } from './algorithm/algorithm.layout';
import { SolveFinalStateLayout } from './final-state/final-state.layout';
import { SolveInitialStateLayout } from './initial-state/initial-state-layout';
import { Container } from './solve.styles';
import { SolveSteps } from './types';

type Algorithm = 'A*' | 'BFS' | 'DFS';
type State = 'final' | 'initial';

interface ISolveState {
  final: number[];
  initial: number[];
  algorithm: Algorithm;
}

interface ISolveLayout {
  step: SolveSteps;
  state: ISolveState;
  onChangeState: (type: State, newState: number[]) => void;
  onChangeStep: (step: SolveSteps) => void;
  onSelectAlgorithm: (algorithm: Algorithm) => void;
}

export const SolveLayout = ({
  step,
  state,
  onChangeState,
  onSelectAlgorithm,
  onChangeStep,
}: ISolveLayout) => {
  const renderFinalStateChoice = (): ReactElement => (
    <SolveFinalStateLayout
      onChangeStep={onChangeStep}
      state={state.final}
      onChangeState={(value) => onChangeState('final', value)}
    />
  );

  const renderStartStateChoice = (): ReactElement => (
    <SolveInitialStateLayout
      onChangeStep={onChangeStep}
      state={state.initial}
      onChangeState={(value) => onChangeState('initial', value)}
    />
  );

  const renderAlgorithmChoice = (): ReactElement => <SolveAlgorithmLayout onChangeStep={onChangeStep} />;

  const renderInfo = (): ReactElement => {
    const steps: { [key: string]: ReactElement } = {
      [SolveSteps.FINAL_STATE]: renderFinalStateChoice(),
      [SolveSteps.INITIAL_STATE]: renderStartStateChoice(),
      [SolveSteps.ALGORITHM]: renderAlgorithmChoice(),
      [SolveSteps.PROCESSING]: <></>,
      [SolveSteps.RESULT]: <></>,
    };

    return steps[step];
  };

  return (
    <Screen>
      <Container>{renderInfo()}</Container>
    </Screen>
  );
};
