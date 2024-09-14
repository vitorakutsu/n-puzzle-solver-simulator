import { createBrowserRouter } from 'react-router-dom';
import { SCREEN_DEFINITIONS } from './screen-definitions';
import { Home } from '~/pages/home/home';

const registerScreen = createBrowserRouter([
  {
    path: SCREEN_DEFINITIONS.home,
    element: <Home />,
  },
  {
    path: '*',
    element: <div>Rota não encontrada</div>,
  },
]);

export const routes = registerScreen;
