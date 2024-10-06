import { State } from '~/components/state/state';
import { useTranslation } from '~/translates/use-translation';
import { IInfoState, SolveSteps } from '../types';
import {
  ButtonWrapper,
  Column,
  Info,
  InfoTitle,
  InfoWrapper,
  Label,
  PrimaryButton,
  Row,
  SecondaryButton,
  TertiaryButton,
  TextWrapper,
  Title,
  Value,
} from './result.styles';

interface ISolveResultLayout {
  state: number[];
  info: IInfoState;
  onChangeStep: (step: SolveSteps) => void;
  onStepByStep: () => void;
  onCompareAlgorithms: () => void;
}

export const SolveResultLayout = ({
  state,
  info,
  onChangeStep,
  onStepByStep,
  onCompareAlgorithms,
}: ISolveResultLayout) => {
  const translate = useTranslation('pages.result');

  const goToStart = () => onChangeStep(SolveSteps.FINAL_STATE);

  const renderText = () => (
    <TextWrapper>
      <Title>{translate('title')}</Title>
    </TextWrapper>
  );

  const renderInfo = (type: keyof IInfoState) => {
    let value: any = info[type];

    if (type == 'time') value = `${Number(value).toFixed(2)}ms`;

    return (
      <Info>
        <Label>{translate(`info.${type}`)}</Label>
        <Value>{value}</Value>
      </Info>
    );
  };

  const renderInfoSection = () => (
    <Column>
      <InfoTitle>{translate('info.title')}</InfoTitle>
      {renderInfo('algorithm')}
      {renderInfo('openedList')}
      {renderInfo('closedList')}
      {renderInfo('time')}
      {renderInfo('distance')}
    </Column>
  );

  const renderButton = () => (
    <ButtonWrapper>
      <Row>
        <PrimaryButton label={translate('button.compare')} onClick={onCompareAlgorithms} />
        <SecondaryButton label={translate('button.stepByStep')} onClick={onStepByStep} />
      </Row>
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
