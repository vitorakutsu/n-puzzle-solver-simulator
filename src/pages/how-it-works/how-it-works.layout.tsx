import { Screen } from '~/components/screen/screen';
import { State } from '~/components/state/state';
import { useTranslation } from '~/translates/use-translation';
import {
  ButtonWrapper,
  Container,
  InfoWrapper,
  PrimaryButton,
  StepContainer,
  StepParagraph,
  StepTitle,
  StepWrapper,
  Subtitle,
  Title,
} from './how-it-works.styles';

interface IText {
  paragraph: string;
}

interface ISteps {
  title: string;
  text: IText[];
}

interface IHowItWorksLayout {
  navigateToSolve: () => void;
}

export const HowItWorksLayout = ({ navigateToSolve }: IHowItWorksLayout) => {
  const translate = useTranslation('pages.howItWorks');
  const steps: ISteps[] = translate('steps', { returnObjects: 'true' }) as unknown as ISteps[];

  const renderText = () => (
    <>
      <Title>{translate('title')}</Title>
      <Subtitle>{translate('subtitle')}</Subtitle>
    </>
  );

  const renderSteps = () => (
    <StepContainer>
      {steps.map((step, index) => (
        <StepWrapper key={index}>
          <StepTitle>{step.title}</StepTitle>
          <StepParagraph>
            {step.text.map((text, index) => (
              <p key={index}>{text.paragraph}</p>
            ))}
          </StepParagraph>
        </StepWrapper>
      ))}
    </StepContainer>
  );

  const renderButton = () => (
    <ButtonWrapper>
      <PrimaryButton label={translate('button.start')} onClick={navigateToSolve} />
    </ButtonWrapper>
  );

  const renderInfo = () => (
    <InfoWrapper>
      {renderText()}
      {renderSteps()}
      {renderButton()}
    </InfoWrapper>
  );

  return (
    <Screen>
      <Container>
        <State isStatic={true} />
        {renderInfo()}
      </Container>
    </Screen>
  );
};
