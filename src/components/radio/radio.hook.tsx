import { useState } from 'react';

interface Options {
  label: string;
  value: string;
}

interface IRadio {
  options: Options[];
  onSelect: (value: string) => void;
}

type Direction = 'left' | 'right';

interface IRadioHook {
  options: Options[];
  index: number;
  direction: Direction;
  handleNext: () => void;
  handlePrevious: () => void;
}

export const useRadioHook = ({ options, onSelect }: IRadio): IRadioHook => {
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleNext = () => {
    setDirection('right');
    setSelectedIndex((prev) => (prev + 1) % options.length);
    onSelect(options[(selectedIndex + 1) % options.length].value);
  };

  const handlePrevious = () => {
    setDirection('left');
    setSelectedIndex((prev) => (prev - 1 + options.length) % options.length);
    onSelect(options[(selectedIndex - 1 + options.length) % options.length].value);
  };

  return {
    options,
    index: selectedIndex,
    direction,
    handleNext,
    handlePrevious,
  };
};
