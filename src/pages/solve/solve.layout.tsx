import { ReactElement } from 'react';
import { Screen } from '~/components/screen/screen';
import { SolveAlgorithmLayout } from './algorithm/algorithm.layout';
import { SolveFinalStateLayout } from './final-state/final-state.layout';
import { SolveInitialStateLayout } from './initial-state/initial-state-layout';
import { Container } from './solve.styles';
import { ISolve, SolveSteps } from './types';
import { SolveProcessingLayout } from './processing/processing.layout';
import { SolveResultLayout } from './result/result.layout';

export const SolveLayout = ({
  step,
  state,
  shuffle,
  info,
  onChangeState,
  onSelectAlgorithm,
  onChangeStep,
  handleShuffle,
  handleSolve,
  onStepByStep,
}: ISolve) => {
  const renderFinalStateChoice = (): ReactElement => (
    <SolveFinalStateLayout
      state={state.final}
      toShuffle={shuffle.final}
      onChangeStep={onChangeStep}
      onChangeState={(value) => onChangeState('final', value)}
      onShuffle={() => handleShuffle('final')}
    />
  );

  const renderInitialStateChoice = (): ReactElement => (
    <SolveInitialStateLayout
      state={state.initial}
      toShuffle={shuffle.initial}
      onChangeStep={onChangeStep}
      onChangeState={(value) => onChangeState('initial', value)}
      onShuffle={() => handleShuffle('initial')}
    />
  );

  const renderAlgorithmChoice = (): ReactElement => (
    <SolveAlgorithmLayout
      state={state.initial}
      onSelectAlgorithm={onSelectAlgorithm}
      onChangeStep={onChangeStep}
      handleSolve={handleSolve}
    />
  );

  const renderProcessing = (): ReactElement => <SolveProcessingLayout state={state.initial} />;

  const renderResult = (): ReactElement => (
    <SolveResultLayout
      state={state.initial}
      info={info}
      onChangeStep={onChangeStep}
      onStepByStep={onStepByStep}
    />
  );

  const renderInfo = (): ReactElement => {
    const steps: { [key: string]: ReactElement } = {
      [SolveSteps.FINAL_STATE]: renderFinalStateChoice(),
      [SolveSteps.INITIAL_STATE]: renderInitialStateChoice(),
      [SolveSteps.ALGORITHM]: renderAlgorithmChoice(),
      [SolveSteps.PROCESSING]: renderProcessing(),
      [SolveSteps.RESULT]: renderResult(),
    };

    return steps[step];
  };

  return (
    <Screen>
      <Container>{renderInfo()}</Container>
    </Screen>
  );
};
