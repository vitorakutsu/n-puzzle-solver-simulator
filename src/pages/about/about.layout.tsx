import { Screen } from '~/components/screen/screen';
import { State } from '~/components/state/state';
import { useTranslation } from '~/translates/use-translation';
import {
  ButtonWrapper,
  Container,
  InfoWrapper,
  Paragraph,
  PrimaryButton,
  Subtitle,
  TextWrapper,
  Title,
} from './about.styles';

interface IText {
  paragraph: string;
}

interface ISteps {
  title: string;
  text: IText[];
}

interface IAboutLayout {
  navigateToSolve: () => void;
}

export const AboutLayout = ({ navigateToSolve }: IAboutLayout) => {
  const translate = useTranslation('pages.about');

  const renderText = () => (
    <>
      <TextWrapper>
        <Title>{translate('title')}</Title>
        <Subtitle>{translate('subtitle')}</Subtitle>
        <Paragraph>{translate('paragraph')}</Paragraph>
      </TextWrapper>
    </>
  );

  const renderButton = () => (
    <ButtonWrapper>
      <PrimaryButton label={translate('button.start')} onClick={navigateToSolve} />
    </ButtonWrapper>
  );

  const renderContent = () => (
    <InfoWrapper>
      {renderText()}
      {renderButton()}
    </InfoWrapper>
  );

  return (
    <Screen>
      <Container>
        <State isStatic={true} />
        {renderContent()}
      </Container>
    </Screen>
  );
};
