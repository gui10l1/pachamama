import { BeOneOfUs, Contact, Container, Content, Copy, Logos, Menu } from "./styles";
import { FiMail } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { FaInstagram } from "react-icons/fa";

import logo from '../../assets/img/footer/footerLogo.png';
import logoWhite from '../../assets/img/footer/logoWhite.png';
import cajuiLogo from '../../assets/img/footer/cajuiLogo.png';
import cajuiLogoWhite from '../../assets/img/footer/cajuiWhite.png';
import arrow from '../../assets/icons/arrow.svg';
import arrowBlack from '../../assets/icons/arrowBlack.svg';

export const Footer = ({ tint = 'light', style = {} }) => {
  const { t } = useTranslation();

  const lang = useMemo(() => {
    return t('components.footer');
  }, [t]);

  const theme = useMemo(() => {
    return {
      dark: {
        logo: logoWhite,
        cajuiLogo: cajuiLogoWhite,
        iconsColor: '#fff',
        arrowIcon: arrowBlack,
      },
      light: {
        logo,
        cajuiLogo,
        iconsColor: '#000',
        arrowIcon: arrow,
      },
    }
  }, []);

  return (
    <Container style={style}>
      <Content>
        <Logos>
          <img src={theme[tint].logo} alt="Logo" width={95} height={53} />

          <img src={theme[tint].cajuiLogo} alt="Logo" width={42} height={43} />
        </Logos>

        <Contact tint={tint}>
          <strong>{lang.title}</strong>

          <div>
            <FiMail size={10} color={theme[tint].iconsColor} />

            <p>redlat.mitocritica@upr.edu</p>
          </div>
        </Contact>

        <Menu tint={tint}>
          <li>
            <Link to="/who-we-are">{lang.menus.about}</Link>
          </li>

          <li>
            <Link to="/members">{lang.menus.members}</Link>
          </li>

          <li>
            {lang.menus.events.title}

            <ul>
              <li>
                <Link to="/seminars">{lang.menus.events.seminary}</Link>
              </li>
              <li>
                <Link to="/colloquies">{lang.menus.events.colloquia}</Link>
              </li>
            </ul>
          </li>

          <li>
            {lang.menus.publications.title}

            <ul>
              <li>
                <Link to="/in-construction">{lang.menus.publications.articles}</Link>
              </li>
              <li>
                <Link to="/in-construction">{lang.menus.publications.books}</Link>
              </li>
              <li>
                <Link to="/magazines">{lang.menus.publications.magazines}</Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="mailto:redlat.mitocritica@upr.edu">{lang.menus.talkToUs}</a>
          </li>
        </Menu>

        <BeOneOfUs tint={tint}>
          <button onClick={() => window.open('https://docs.google.com/forms/d/1QJRSv_MPDsmalFopY8pMPfFaw31HyT_GdoVlOLOep4k/edit')}>
            {lang.beOneOfUs}

            {tint === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M17.5711 3.42849C13.666 -0.476626 7.33405 -0.476626 3.42893 3.42849C-0.476183 7.3336 -0.476183 13.6655 3.42893 17.5706C7.33405 21.4757 13.666 21.4757 17.5711 17.5706C21.4762 13.6655 21.4762 7.3336 17.5711 3.42849ZM12.1117 11.3123L7.70528 15.7187L5.28085 13.2943L9.6873 8.88783L7.12828 6.32881L14.5069 6.49262L14.6708 13.8713L12.1117 11.3123Z" fill="black" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M17.7351 3.42849C13.83 -0.476626 7.49811 -0.476626 3.59299 3.42849C-0.31212 7.3336 -0.31212 13.6655 3.59299 17.5706C7.49811 21.4757 13.83 21.4757 17.7351 17.5706C21.6402 13.6655 21.6402 7.3336 17.7351 3.42849ZM12.2758 11.3123L7.86934 15.7187L5.44491 13.2943L9.85136 8.88783L7.29234 6.32881L14.671 6.49262L14.8348 13.8713L12.2758 11.3123Z" fill="white" />
              </svg>
            )}
          </button>
        </BeOneOfUs>
      </Content>

      <Copy tint={tint}>
        <p>&copy; {lang.copy}</p>

        <a href="https://www.instagram.com/pachamama_mitocritica/" target="_blank" rel="noreferrer">
          <FaInstagram size={18} color={tint === 'dark' ? '#fff' : '#000'} />

          Instagram
        </a>
      </Copy>
    </Container>
  );
}