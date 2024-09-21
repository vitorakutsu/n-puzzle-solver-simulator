import { noop } from 'lodash';
import { Button, ButtonType } from '~/components/button/button';
import { Screen } from '~/components/screen/screen';
import { State } from '~/components/state/state';
import { useTranslation } from '~/translates/use-translation';
import { ButtonWrapper, Container, InfoWrapper, Paragraph, TextWrapper, Title } from './home.styles';

interface IHomeLayout {
  navigateToHowItWorks: () => void;
}

export const HomeLayout = ({ navigateToHowItWorks }: IHomeLayout) => {
  const translate = useTranslation('pages.home');

  const renderText = () => (
    <TextWrapper>
      <Title>{translate('title')}</Title>
      <Paragraph>{translate('paragraph')}</Paragraph>
    </TextWrapper>
  );

  const renderButton = () => (
    <ButtonWrapper>
      <Button type={ButtonType.LIGHT} label={translate('button.howItWorks')} onClick={navigateToHowItWorks} />
      <Button type={ButtonType.PRIMARY} label={translate('button.start')} onClick={noop} />
    </ButtonWrapper>
  );

  const renderInfo = () => (
    <InfoWrapper>
      {renderText()}
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
