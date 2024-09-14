import { Screen } from '~/components/screen/screen';
import { State } from '~/components/state/state';
import { ButtonWrapper, Container, InfoWrapper, Paragraph, TextWrapper, Title } from './home.styles';
import { Button, ButtonType } from '~/components/button/button';
import { noop } from 'lodash';
import { useTranslation } from '~/translates/use-translation';

export const HomeLayout = () => {
  const translate = useTranslation('pages.home');

  const renderInfo = () => (
    <InfoWrapper>
      <TextWrapper>
        <Title>{translate('title')}</Title>
        <Paragraph>{translate('paragraph')}</Paragraph>
      </TextWrapper>
      <ButtonWrapper>
        <Button type={ButtonType.LIGHT} label={translate('button.howItWorks')} onClick={noop} />
        <Button type={ButtonType.PRIMARY} label={translate('button.start')} onClick={noop} />
      </ButtonWrapper>
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
