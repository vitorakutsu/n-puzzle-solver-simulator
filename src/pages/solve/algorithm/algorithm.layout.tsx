import { Radio } from '~/components/radio/radio';
import { State } from '~/components/state/state';
import { useTranslation } from '~/translates/use-translation';
import { SolveSteps } from '../types';
import {
  ButtonWrapper,
  InfoWrapper,
  LightButton,
  Paragraph,
  Row,
  Subtitle,
  TertiaryButton,
  TextWrapper,
  Title,
} from './algorithm.styles';

interface ISolveAlgorithmLayout {
  state: number[];
  onSelectAlgorithm: (algorithm: string) => void;
  onSelectSearchLevel: (level: string) => void;
  onSelectDistance: (distance: string) => void;
  onChangeStep: (step: SolveSteps) => void;
  handleSolve: () => void;
}

export const SolveAlgorithmLayout = ({
  state,
  onChangeStep,
  onSelectAlgorithm,
  onSelectDistance,
  onSelectSearchLevel,
  handleSolve,
}: ISolveAlgorithmLayout) => {
  const translate = useTranslation('pages.algorithm');

  const goBack = () => onChangeStep(SolveSteps.INITIAL_STATE);

  const options = [
    { label: 'A* Search', value: 'A*' },
    { label: 'Greedy Search', value: 'Greedy' },
  ];

  // const levels = [
  //   { label: 'Nível 1', value: '1' },
  //   { label: 'Nível 2', value: '2' },
  // ];

  const distance = [
    { label: 'Manhattan', value: 'Manhattan' },
    { label: 'Misplaced Tiles', value: 'Misplaced' },
  ];

  const renderText = () => (
    <TextWrapper>
      <Title>{translate('title')}</Title>
      <Subtitle>{translate('subtitle')}</Subtitle>
      <Paragraph>{translate('paragraph')}</Paragraph>
    </TextWrapper>
  );

  const renderButton = () => (
    <ButtonWrapper>
      <Radio label={translate('radio.label')} options={options} onSelect={onSelectAlgorithm} />
      <Row>
        {/* <Radio label={''} options={levels} onSelect={onSelectSearchLevel} /> */}
        <Radio label={''} options={distance} onSelect={onSelectDistance} />
      </Row>
      <Row>
        <LightButton label={translate('button.back')} onClick={goBack} />
        <TertiaryButton label={translate('button.start')} onClick={handleSolve} />
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
      <State puzzleState={state} />
      {renderInfo()}
    </>
  );
};
