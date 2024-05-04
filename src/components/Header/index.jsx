import { useCallback, useMemo, useRef } from 'react';
import headerLogo from '../../assets/img/headerLogo.png';
import { Dropdown } from '../Dropdown';
import { BeOneOfUs, Container, ImgWrapper, Languages, LanguagesControls, Nav, ContainerBlur, Content, MenuButton, MenuMobile, NavMobile, LanguagesMobile } from './styles';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const navMobileRef = useRef(null);

  const language = useMemo(() => {
    return t('components.header');
  }, [t]);

  const aquaDropdown = useMemo(() => {
    return [
      {
        link: '/colloquies',
        title: language.menus.events.dropdown.colloquia.title,
        summary: language.menus.events.dropdown.colloquia.summary,
      },
      {
        link: '/seminars',
        title: language.menus.events.dropdown.seminary.title,
        summary: language.menus.events.dropdown.seminary.summary,
      },
    ]
  }, [language]);

  const fireDropdown = useMemo(() => {
    return [
      {
        link: '/in-construction',
        title: language.menus.publications.dropdown.articles.title,
        summary: language.menus.publications.dropdown.articles.summary,
      },
      {
        link: '/in-construction',
        title: language.menus.publications.dropdown.books.title,
        summary: language.menus.publications.dropdown.books.summary,
      },
      {
        link: '/magazines',
        title: language.menus.publications.dropdown.magazines.title,
        summary: language.menus.publications.dropdown.magazines.summary,
      },
    ]
  }, [language]);

  const handleOpenMenu = useCallback(() => {
    if (!navMobileRef.current) return;

    const computedStyles = window.getComputedStyle(navMobileRef.current);
    const { maxHeight } = computedStyles;

    if (maxHeight === '0px') {
      navMobileRef.current.style.maxHeight = '600px';
    } else {
      navMobileRef.current.style.maxHeight = '0px';
    }
  }, []);

  return (
    <Container>
      <ContainerBlur />

      <Content>
        <ImgWrapper to="/home">
          <img src={headerLogo} alt="Logo" />
        </ImgWrapper>

        <Nav>
          <li>
            <Link to="/who-we-are">{language.menus.about}</Link>
          </li>
          <li>
            <Link to="/members">{language.menus.members}</Link>
          </li>
          <li>
            <Dropdown
              text={language.menus.events.title}
              type="aqua"
              options={aquaDropdown}
            />
          </li>
          <li>
            <Dropdown
              text={language.menus.publications.title}
              type="fire"
              options={fireDropdown}
            />
          </li>
          <li>
            <Dropdown
              text={language.menus.talkToUs}
              type="fire"
              qrCode
            />
          </li>
        </Nav>

        <Languages>
          <BeOneOfUs>
            <div>
              <button type="button" onClick={() => navigate('/become-member')}>{language.beOneOfUs}</button>
            </div>
          </BeOneOfUs>

          <LanguagesControls current={i18n.language}>
            <button
              type="button"
              onClick={() => i18n.changeLanguage('es')}
            >
              es
            </button>

            <button
              type="button"
              onClick={() => i18n.changeLanguage('pt')}
            >
              pt
            </button>
          </LanguagesControls>
        </Languages>

        <MenuButton>
          <button type="button" onClick={handleOpenMenu}>
            <FiMenu size={20} color="#fff" />
          </button>
        </MenuButton>
      </Content>

      <MenuMobile ref={navMobileRef}>
        <NavMobile>
          <li>
            <Link to="/">{language.menus.about}</Link>
          </li>
          <li>
            <Link to="/members">{language.menus.members}</Link>
          </li>
          <li>
            <Dropdown
              text={language.menus.events.title}
              type="aqua"
              options={aquaDropdown}
            />
          </li>
          <li>
            <Dropdown
              text={language.menus.publications.title}
              type="fire"
              options={fireDropdown}
            />
          </li>
          <li>
            <Dropdown
              text={language.menus.talkToUs}
              type="fire"
              qrCode
            />
          </li>
        </NavMobile>

        <LanguagesMobile>
          <BeOneOfUs>
            <div>
              <button type="button" onClick={() => navigate('/become-member')}>{language.beOneOfUs}</button>
            </div>
          </BeOneOfUs>

          <LanguagesControls current={i18n.language}>
            <button
              type="button"
              onClick={() => i18n.changeLanguage('es')}
            >
              es
            </button>

            <button
              type="button"
              onClick={() => i18n.changeLanguage('pt')}
            >
              pt
            </button>
          </LanguagesControls>
        </LanguagesMobile>
      </MenuMobile>
    </Container>
  );
}