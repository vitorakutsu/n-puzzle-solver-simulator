import { useNavigate } from 'react-router-dom';
import { SCREEN_DEFINITIONS } from '~/app/routes/screen-definitions';

interface IHomeHook {
  navigateToHowItWorks: () => void;
  navigateToSolve: () => void;
}

export const useHomeHook = (): IHomeHook => {
  const navigate = useNavigate();

  const navigateToHowItWorks = () => navigate(SCREEN_DEFINITIONS.howItWorks);
  const navigateToSolve = () => navigate(SCREEN_DEFINITIONS.solve);

  return {
    navigateToHowItWorks,
    navigateToSolve,
  };
};
