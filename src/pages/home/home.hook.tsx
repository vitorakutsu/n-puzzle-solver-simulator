import { useNavigate } from 'react-router-dom';
import { SCREEN_DEFINITIONS } from '~/app/routes/screen-definitions';

interface IHomeHook {
  navigateToHowItWorks: () => void;
}

export const useHomeHook = (): IHomeHook => {
  const navigate = useNavigate();

  const navigateToHowItWorks = () => navigate(SCREEN_DEFINITIONS.howItWorks);

  return {
    navigateToHowItWorks,
  };
};
