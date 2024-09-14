import { useStateHook } from './state.hook';
import { StateLayout } from './state.layout';

interface IState {
  isStatic?: boolean;
}

export const State = ({ isStatic = false }: IState) => {
  const properties = useStateHook();

  return <StateLayout isStatic={isStatic} {...properties} />;
};
