import { useNavigate } from 'react-router-dom';
import { SCREEN_DEFINITIONS } from '~/app/routes/screen-definitions';

interface IHowItWorksHook {
  navigateToSolve: () => void;
}

export const useHowItWorksHook = (): IHowItWorksHook => {
  const navigate = useNavigate();

  const navigateToSolve = () => navigate(SCREEN_DEFINITIONS.solve);

  return {
    navigateToSolve,
  };
};
