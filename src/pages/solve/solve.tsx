import { useSolve } from './solve.hook';
import { SolveLayout } from './solve.layout';

export const Solve = () => {
  const properties = useSolve();

  return <SolveLayout {...properties} />;
};
