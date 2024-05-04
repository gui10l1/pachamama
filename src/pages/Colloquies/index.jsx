import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, SectionOne } from "./styles";
import earth from '../../assets/img/magazines/earth.png';
import check from '../../assets/icons/check.svg';

import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export const Colloquies = () => {
  const { t } = useTranslation();

  const lang = useMemo(() => {
    return t('pages.colloquies');
  }, [t]);

  return (
    <Container>
      <Header />

      <SectionOne>
        <header>
          <img src={earth} alt="Logo" />

          <h1>{lang.title}</h1>
        </header>

        <main>
          <div>
            <h1>{lang.card.title}</h1>

            <span>{lang.card.date}</span>

            <p>{lang.card.description}</p>

            <ul>
              <li>
                <img src={check} alt="Check" />

                {lang.card.list[0]}
              </li>
              <li>
                <img src={check} alt="Check" />

                {lang.card.list[1]}
              </li>
              <li>
                <img src={check} alt="Check" />

                {lang.card.list[2]}
              </li>
            </ul>

            <button onClick={() => window.open('https://sites.google.com/upr.edu/pachamama/inicio')}>
              {lang.card.button}

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.6569 2.34338C10.5328 -0.780715 5.46724 -0.780715 2.34315 2.34338C-0.780946 5.46747 -0.780946 10.533 2.34315 13.6571C5.46724 16.7812 10.5328 16.7812 13.6569 13.6571C16.7809 10.533 16.7809 5.46747 13.6569 2.34338ZM9.28939 8.65039L5.76422 12.1756L3.82468 10.236L7.34984 6.71085L5.30262 4.66363L11.2056 4.79468L11.3366 10.6976L9.28939 8.65039Z" fill="white" />
              </svg>
            </button>
          </div>
        </main>
      </SectionOne>

      <Footer tint="dark" style={{ backgroundColor: '#0000000D', backdropFilter: 'blur(5px)' }} />
    </Container>
  );
}