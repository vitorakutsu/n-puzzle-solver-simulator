import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { ControlsWrapper, Label, OptionDisplay, RadioContainer } from './radio.styles';

interface Options {
  label: string;
  value: string;
}

type Direction = 'left' | 'right';

interface IRadio {
  label: string;
  index: number;
  direction: Direction;
  options: Options[];
  handleNext: () => void;
  handlePrevious: () => void;
}

export const RadioLayout = ({ label, options, direction, index, handleNext, handlePrevious }: IRadio) => {
  return (
    <RadioContainer>
      <Label>{label}</Label>
      <ControlsWrapper>
        <ChevronLeftIcon onClick={handlePrevious} width={8} height={8} cursor={'pointer'} />
        <OptionDisplay key={`${index}-${direction}`} direction={direction}>
          <Label>{options[index].label}</Label>
        </OptionDisplay>
        <ChevronRightIcon onClick={handleNext} width={8} height={8} cursor={'pointer'} />
      </ControlsWrapper>
    </RadioContainer>
  );
};
