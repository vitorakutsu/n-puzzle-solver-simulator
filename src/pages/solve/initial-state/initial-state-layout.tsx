import {
  InfoWrapper,
  TextWrapper,
  Title,
  Subtitle,
  Paragraph,
  ButtonWrapper,
  SecondaryButton,
  PrimaryButton,
  Row,
  LightButton,
} from './initial-state.styles';
import { SolveSteps } from '../types';
import { useTranslation } from '~/translates/use-translation';
import { State } from '~/components/state/state';

interface ISolveInitialStateLayout {
  state: number[];
  onChangeState: (state: number[]) => void;
  onChangeStep: (step: SolveSteps) => void;
}

export const SolveInitialStateLayout = ({ state, onChangeState, onChangeStep }: ISolveInitialStateLayout) => {
  const translate = useTranslation('pages.initialState');

  const goBack = () => onChangeStep(SolveSteps.FINAL_STATE);
  const goNext = () => onChangeStep(SolveSteps.ALGORITHM);

  const renderText = () => (
    <TextWrapper>
      <Title>{translate('title')}</Title>
      <Subtitle>{translate('subtitle')}</Subtitle>
      <Paragraph>{translate('paragraph')}</Paragraph>
    </TextWrapper>
  );

  const renderButton = () => (
    <ButtonWrapper>
      <SecondaryButton label={translate('button.shuffle')} onClick={goBack} />
      <Row>
        <LightButton label={translate('button.back')} onClick={goBack} />
        <PrimaryButton label={translate('button.next')} onClick={goNext} />
      </Row>
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
