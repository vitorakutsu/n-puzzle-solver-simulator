import { createBrowserRouter } from 'react-router-dom';
import { SCREEN_DEFINITIONS } from './screen-definitions';
import { Home } from '~/pages/home/home';
import { HowItWorks } from '~/pages/how-it-works/how-it-works';

const registerScreen = createBrowserRouter([
  {
    path: SCREEN_DEFINITIONS.home,
    element: <Home />,
  },
  { path: SCREEN_DEFINITIONS.howItWorks, element: <HowItWorks /> },
  {
    path: '*',
    element: <div>Rota não encontrada</div>,
  },
]);

export const routes = registerScreen;
