
import { SolveSteps } from '../types';

interface ISolveProcessingLayout {
  onChangeStep: (step: SolveSteps) => void;
}

export const SolveProcessingLayout = ({}: ISolveProcessingLayout) => {
  return (
    <div>
      <h1>SolveResult</h1>
    </div>
  );
};
