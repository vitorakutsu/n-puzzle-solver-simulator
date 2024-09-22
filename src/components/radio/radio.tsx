import { useRadioHook } from './radio.hook';
import { RadioLayout } from './radio.layout';

interface Options {
  label: string;
  value: string;
}

interface IRadio {
  label: string;
  options: Options[];
  onSelect: (value: string) => void;
}

export const Radio = ({ options, label, onSelect }: IRadio) => {
  const properties = useRadioHook({ onSelect, options });

  return <RadioLayout label={label} {...properties} />;
};
