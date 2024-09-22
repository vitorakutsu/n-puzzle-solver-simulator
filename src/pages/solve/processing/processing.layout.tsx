import { State } from '~/components/state/state';
import { useTranslation } from '~/translates/use-translation';
import { InfoWrapper, Loader, TextWrapper, Title } from './processing.styles';

interface ISolveProcessingLayout {
  state: number[];
}

export const SolveProcessingLayout = ({ state }: ISolveProcessingLayout) => {
  const translate = useTranslation('pages.processing');

  const renderText = () => (
    <TextWrapper>
      <Title>{translate('title')}</Title>
      {renderLoader()}
    </TextWrapper>
  );

  const renderLoader = () => (
    <Loader>
      <span></span>
      <span></span>
      <span></span>
    </Loader>
  );

  const renderInfo = () => <InfoWrapper>{renderText()}</InfoWrapper>;

  return (
    <>
      <State puzzleState={state} />
      {renderInfo()}
    </>
  );
};
