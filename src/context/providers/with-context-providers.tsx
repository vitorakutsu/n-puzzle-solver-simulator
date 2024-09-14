import { ChakraProvider } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface IProvider {
  children: ReactElement;
}

export const WithContextProviders = ({ children }: IProvider): ReactElement => (
  <ChakraProvider>{children}</ChakraProvider>
);
