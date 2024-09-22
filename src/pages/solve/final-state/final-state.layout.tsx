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
} from './final-state.styles';
import { State } from '~/components/state/state';

interface ISolveFinalStateLayout {
  state: number[];
  onChangeState: (state: number[]) => void;
  onChangeStep: (step: SolveSteps) => void;
}

export const SolveFinalStateLayout = ({ state, onChangeState, onChangeStep }: ISolveFinalStateLayout) => {
  const translate = useTranslation('pages.finalState');

  const goNext = () => onChangeStep(SolveSteps.INITIAL_STATE);

  const renderText = () => (
    <TextWrapper>
      <Title>{translate('title')}</Title>
      <Subtitle>{translate('subtitle')}</Subtitle>
      <Paragraph>{translate('paragraph')}</Paragraph>
    </TextWrapper>
  );

  const renderButton = () => (
    <ButtonWrapper>
      <SecondaryButton label={translate('button.shuffle')} onClick={goNext} />
      <PrimaryButton label={translate('button.next')} onClick={goNext} />
    </ButtonWrapper>
  );

  const renderInfo = () => (
    <InfoWrapper>
      {renderText()}
      {renderButton()}
    </InfoWrapper>
  );

  return (
    <>
      <State puzzleState={state} onChangePuzzleState={onChangeState} />
      {renderInfo()}
    </>
  );
};
