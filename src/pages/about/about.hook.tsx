import { useNavigate } from 'react-router-dom';
import { SCREEN_DEFINITIONS } from '~/app/routes/screen-definitions';

interface IAboutHook {
  navigateToSolve: () => void;
}

export const useAboutHook = (): IAboutHook => {
  const navigate = useNavigate();

  const navigateToSolve = () => navigate(SCREEN_DEFINITIONS.solve);

  return {
    navigateToSolve,
  };
};
