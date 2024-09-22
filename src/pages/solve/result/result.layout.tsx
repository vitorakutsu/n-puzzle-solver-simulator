import { SolveSteps } from '../types';

interface ISolveResultLayout {
  onChangeStep: (step: SolveSteps) => void;
}

export const SolveResultLayout = ({}: ISolveResultLayout) => {
  return (
    <div>
      <h1>SolveResult</h1>
    </div>
  );
};
