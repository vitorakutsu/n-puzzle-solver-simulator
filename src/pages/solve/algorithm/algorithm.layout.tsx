import { useTranslation } from '~/translates/use-translation';
import { SolveSteps } from '../types';
import {
  ButtonWrapper,
  InfoWrapper,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  Subtitle,
  TextWrapper,
  Title,
} from './algorithm.styles';

interface ISolveAlgorithmLayout {
  onChangeStep: (step: SolveSteps) => void;
}

export const SolveAlgorithmLayout = ({ onChangeStep }: ISolveAlgorithmLayout) => {
  const translate = useTranslation('pages.algorithm');

  const goBack = () => onChangeStep(SolveSteps.INITIAL_STATE);
  const goNext = () => onChangeStep(SolveSteps.PROCESSING);

  return (
    <InfoWrapper>
      <TextWrapper>
        <Title>{translate('title')}</Title>
        <Subtitle>{translate('subtitle')}</Subtitle>
        <Paragraph>{translate('paragraph')}</Paragraph>
      </TextWrapper>
      <ButtonWrapper>
        <SecondaryButton label={translate('button.back')} onClick={goBack} />
        {/* <Button type={ButtonType.SECONDARY} label={translate('button.chooseAnAlgorithm')} onClick={noop} /> */}
        <PrimaryButton label={translate('button.next')} onClick={goNext} />
      </ButtonWrapper>
    </InfoWrapper>
  );
};
