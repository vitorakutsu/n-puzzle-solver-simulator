import { AtSignIcon, InfoOutlineIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import i18n from 'i18next';
import { ReactElement } from 'react';
import { BrazilImage, LogoImage, UnitedStateImage } from '~/assets/images-mapping';
import { useTranslation } from '~/translates/use-translation';
import { Container, FlagImage, Logo, Option, Options, Text, Wrapper } from './top-bar.styles';

enum TopBarOption {
  START = 'start',
  HOW_IT_WORKS = 'howItWorks',
  ABOUT = 'about',
}

export const TopBar = () => {
  const translate = useTranslation('components.topBar.options');
  const language = i18n.language;
  const changeLanguage = () => {
    const newLanguage = language === 'en-US' ? 'pt-BR' : 'en-US';
    i18n.changeLanguage(newLanguage);
  };

  const renderLogo = () => <Logo src={LogoImage} />;

  const renderOption = () => {
    const options = Object.values(TopBarOption);

    return options.map((option) => {
      const icon: { [key: string]: ReactElement } = {
        [TopBarOption.START]: <AtSignIcon />,
        [TopBarOption.HOW_IT_WORKS]: <QuestionOutlineIcon />,
        [TopBarOption.ABOUT]: <InfoOutlineIcon />,
      };

      const redirect: { [key: string]: string } = {
        [TopBarOption.START]: '/solve',
        [TopBarOption.HOW_IT_WORKS]: '/how-it-works',
        [TopBarOption.ABOUT]: '/about',
      };

      return (
        <Option>
          {icon[option]}
          <Text href={redirect[option]}>{translate(`${option}`)}</Text>
        </Option>
      );
    });
  };

  const renderFlag = () => {
    const image = language === 'pt-BR' ? UnitedStateImage : BrazilImage;
    return <FlagImage src={image} onClick={changeLanguage} />;
  };

  const renderOptions = () => (
    <Options>
      {renderOption()}
      {renderFlag()}
    </Options>
  );

  return (
    <Container>
      <Wrapper>
        {renderLogo()}
        {renderOptions()}
      </Wrapper>
    </Container>
  );
};
