import { RouterProvider } from 'react-router-dom';
import { WithContextProviders } from '~/context/providers/with-context-providers';
import { routes } from './routes/register-screens';
import './app.css';
import { initializeI18n } from '~/translates';

initializeI18n();

function App() {
  return (
    <WithContextProviders>
      <RouterProvider router={routes} />
    </WithContextProviders>
  );
}

export default App;
