import { useHomeHook } from './home.hook';
import { HomeLayout } from './home.layout';

export const Home = () => {
  const properties = useHomeHook();

  return <HomeLayout {...properties} />;
};
