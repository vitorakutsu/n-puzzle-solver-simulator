import { createBrowserRouter } from 'react-router-dom';
import { SCREEN_DEFINITIONS } from './screen-definitions';
import { Home } from '~/pages/home/home';
import { HowItWorks } from '~/pages/how-it-works/how-it-works';
import { Solve } from '~/pages/solve/solve';
import { About } from '~/pages/about/about';

const registerScreen = createBrowserRouter([
  {
    path: SCREEN_DEFINITIONS.home,
    element: <Home />,
  },
  { path: SCREEN_DEFINITIONS.howItWorks, element: <HowItWorks /> },
  { path: SCREEN_DEFINITIONS.solve, element: <Solve /> },
  { path: SCREEN_DEFINITIONS.about, element: <About /> },
  {
    path: '*',
    element: <div>Rota não encontrada</div>,
  },
]);

export const routes = registerScreen;
