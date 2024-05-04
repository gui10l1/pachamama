import { Container, Content, Control } from "./styles";
import { FiChevronDown, FiMail } from 'react-icons/fi';
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import logoAqua from '../../assets/icons/aqua.svg';
import logoFire from '../../assets/icons/fire.svg';
import logoEarth from '../../assets/icons/earth.svg';
import logoAir from '../../assets/icons/air.svg';
import headerQrCode from '../../assets/img/headerQrCode.png';
import { useTranslation } from "react-i18next";

export const Dropdown = ({ text, type = 'aqua', options = [], qrCode = false }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const { width } = window.screen;

    setVisible(width > 872);
  }, []);

  const language = useMemo(() => {
    return t('components.dropdown');
  }, [t]);

  const logos = useMemo(() => {
    return {
      aqua: {
        top: logoAqua,
        bottom: logoAir,
      },
      fire: {
        top: logoFire,
        bottom: logoEarth,
      },
    }
  }, []);

  const handleOpenDropdown = useCallback(() => {
    const windowWidth = window.screen.width;

    console.log({ windowWidth });

    if (windowWidth > 872) return;

    setVisible(oldState => !oldState);
  }, []);

  return (
    <Container>
      <Control onClick={handleOpenDropdown}>
        <span>{text}</span>

        <FiChevronDown size={14} color="#fff" />
      </Control>

      <Content type={type} qrCode={qrCode} visible={visible}>
        {!qrCode && <img src={logos[type].top} alt="Logo" />}

        {!qrCode ? (
          <ul>
            {options.map((opt, index) => {
              return (
                <li key={index}>
                  <Link to={opt.link}>
                    <strong>{opt.title}</strong>

                    <span>{opt.summary}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>
            <img src={headerQrCode} alt="QR Code" />

            <p>{language.qrCodeDesc}</p>

            <div>
              <FiMail size={10} color="#fff" />

              <span>redlat.mitocritica@upr.edu</span>
            </div>
          </div>
        )}

        {!qrCode && <img src={logos[type].bottom} alt="Logo" />}
      </Content>
    </Container>
  );
};