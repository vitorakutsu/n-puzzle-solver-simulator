import { useHowItWorksHook } from './how-it-works.hook';
import { HowItWorksLayout } from './how-it-works.layout';

export const HowItWorks = () => {
  const properties = useHowItWorksHook();

  return <HowItWorksLayout {...properties} />;
};
