import { useAboutHook } from './about.hook';
import { AboutLayout } from './about.layout';

export const About = () => {
  const properties = useAboutHook();

  return <AboutLayout {...properties} />;
};
