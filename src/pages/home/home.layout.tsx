import { Screen } from '~/components/screen/screen';
import { State } from '~/components/state/state';
import { ButtonWrapper, Container, InfoWrapper, Paragraph, Subtitle, TextWrapper, Title } from './home.styles';
import { Button, ButtonType } from '~/components/button/button';
import { noop } from 'lodash';
import { useTranslation } from '~/translates/use-translation';
import { useState } from 'react';
import { StepEnum } from '~/enums/step-enum';

export const HomeLayout = () => {
  const translate = useTranslation('pages');

  const [screenSteps, setScreenSteps] = useState(StepEnum.ABOUT);

  const changeScreenStep = (nextStep: StepEnum) => {
    setScreenSteps(nextStep);
  };

  const renderAboutInfo = () => (
    <InfoWrapper>
      <TextWrapper>
        <Title>{translate('about.title')}</Title>
        <Subtitle>{translate('about.subtitle')}</Subtitle>
        <Paragraph>{translate('about.paragraph')}</Paragraph>
      </TextWrapper>
      <ButtonWrapper>
        <Button
          type={ButtonType.PRIMARY}
          label={translate('about.button.start')}
          onClick={() => changeScreenStep(StepEnum.FINAL_STATE_CHOICE)}
        />
      </ButtonWrapper>
    </InfoWrapper>
  );

  const renderFinalStateChoice = () => (
    <InfoWrapper>
      <TextWrapper>
        <Title>{translate('finalStateChoice.title')}</Title>
        <Subtitle>{translate('finalStateChoice.subtitle')}</Subtitle>
        <Paragraph>{translate('finalStateChoice.paragraph')}</Paragraph>
      </TextWrapper>
      <ButtonWrapper>
        <Button
          type={ButtonType.PRIMARY}
          label={translate('finalStateChoice.button.next')}
          onClick={() => changeScreenStep(StepEnum.START_STATE_CHOICE)}
        />
      </ButtonWrapper>
    </InfoWrapper>
  );

  const renderStartStateChoice = () => (
    <InfoWrapper>
      <TextWrapper>
        <Title>{translate('startStateChoice.title')}</Title>
        <Subtitle>{translate('startStateChoice.subtitle')}</Subtitle>
        <Paragraph>{translate('startStateChoice.paragraph')}</Paragraph>
      </TextWrapper>
      <ButtonWrapper>
        <Button
          type={ButtonType.SECONDARY}
          label={translate('startStateChoice.button.back')}
          onClick={() => changeScreenStep(StepEnum.FINAL_STATE_CHOICE)}
        />
        <Button
          type={ButtonType.PRIMARY}
          label={translate('startStateChoice.button.next')}
          onClick={() => changeScreenStep(StepEnum.ALGORITHM_CHOISE)}
        />
      </ButtonWrapper>
    </InfoWrapper>
  );

  const renderAlgorithmChoice = () => (
    <InfoWrapper>
      <TextWrapper>
        <Title>{translate('algorithmChoice.title')}</Title>
        <Subtitle>{translate('algorithmChoice.subtitle')}</Subtitle>
        <Paragraph>{translate('algorithmChoice.paragraph')}</Paragraph>
      </TextWrapper>
      <ButtonWrapper>
        <Button
          type={ButtonType.SECONDARY}
          label={translate('algorithmChoice.button.back')}
          onClick={() => changeScreenStep(StepEnum.START_STATE_CHOICE)}
        />
        <Button
          type={ButtonType.SECONDARY}
          label={translate('algorithmChoice.button.chooseAnAlgorithm')}
          onClick={noop}
        />
        <Button
          type={ButtonType.PRIMARY}
          label={translate('algorithmChoice.button.next')}
          onClick={noop}
        />
      </ButtonWrapper>
    </InfoWrapper>
  );

  const renderInfo = () => {
    switch (screenSteps) {
      case StepEnum.ABOUT:
        return renderAboutInfo();
      case StepEnum.FINAL_STATE_CHOICE:
        return renderFinalStateChoice();
      case StepEnum.START_STATE_CHOICE:
        return renderStartStateChoice();
      case StepEnum.ALGORITHM_CHOISE:
        return renderAlgorithmChoice();
      default:
        return renderAboutInfo();
    }
  };

  return (
    <Screen>
      <Container>
        <State isStatic={true} />
        {renderInfo()}
      </Container>
    </Screen>
  );
};
