import { State } from '~/components/state/state';
import { useTranslation } from '~/translates/use-translation';
import {
  ButtonWrapper,
  Column,
  Info,
  InfoTitle,
  InfoWrapper,
  Label,
  SecondaryButton,
  TertiaryButton,
  TextWrapper,
  Title,
  Value,
} from './result.styles';
import { IInfoState, SolveSteps } from '../types';

interface ISolveResultLayout {
  state: number[];
  info: IInfoState;
  onChangeStep: (step: SolveSteps) => void;
  onStepByStep: () => void;
}

export const SolveResultLayout = ({ state, info, onChangeStep, onStepByStep }: ISolveResultLayout) => {
  const translate = useTranslation('pages.result');

  const goToStart = () => onChangeStep(SolveSteps.FINAL_STATE);

  const renderText = () => (
    <TextWrapper>
      <Title>{translate('title')}</Title>
    </TextWrapper>
  );

  const renderInfo = (type: keyof IInfoState) => (
    <Info>
      <Label>{translate(`info.${type}`)}</Label>
      <Value>{info[type]}</Value>
    </Info>
  );

  const renderInfoSection = () => (
    <Column>
      <InfoTitle>{translate('info.title')}</InfoTitle>
      {renderInfo('algorithm')}
      {renderInfo('steps')}
      {renderInfo('time')}
    </Column>
  );

  const renderButton = () => (
    <ButtonWrapper>
      <SecondaryButton label={translate('button.stepByStep')} onClick={onStepByStep} />
      <TertiaryButton label={translate('button.tryAgain')} onClick={goToStart} />
    </ButtonWrapper>
  );

  const renderContent = () => (
    <InfoWrapper>
      {renderText()}
      {renderInfoSection()}
      {renderButton()}
    </InfoWrapper>
  );

  return (
    <>
      <State puzzleState={state} />
      {renderContent()}
    </>
  );
};
