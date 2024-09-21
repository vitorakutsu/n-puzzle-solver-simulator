import { Screen } from '~/components/screen/screen';
import { State } from '~/components/state/state';
import { useTranslation } from '~/translates/use-translation';
import {
  ButtonWrapper,
  Container,
  InfoWrapper,
  StepContainer,
  StepParagraph,
  StepTitle,
  StepWrapper,
  Subtitle,
  Title,
} from './how-it-works.styles';
import { Button, ButtonType } from '~/components/button/button';
import { noop } from 'lodash';

interface IText {
  paragraph: string;
}

interface ISteps {
  title: string;
  text: IText[];
}

export const HowItWorksLayout = () => {
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
      <Button label={translate('button.start')} onClick={noop} type={ButtonType.PRIMARY} />
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
