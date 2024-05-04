import { Trans, useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { AboutUs, Card, Container, Content, Overlay, SectionOne } from './styles';
import { useMemo } from 'react';
import logo from '../../assets/img/be-one-of-us/logo.png';
import aquaIcon from '../../assets/icons/aqua.svg';
import earthIcon from '../../assets/icons/earth.svg';
import fireIcon from '../../assets/icons/fire.svg';

export const WhoWeAre = () => {
  const { t } = useTranslation();

  const lang = useMemo(() => {
    return t('pages.who-we-are');
  }, [t]);

  return (
    <Container>
      <Overlay />

      <Content>
        <Header />

        <SectionOne>
          <Card>
            <img src={logo} alt="Logo" />

            <h1>{lang.title}</h1>

            <AboutUs color="#EF7878">
              <header>
                <img src={fireIcon} alt="Fire" />

                <h1>{lang.card.origin.title}</h1>
              </header>

              <main>
                <Trans
                  i18nKey="pages.who-we-are.card.origin.info"
                  components={{ strong: <strong />, p: <p /> }}
                />
              </main>
            </AboutUs>

            <AboutUs color="#46AA97">
              <header>
                <img src={aquaIcon} alt="Aqua" />

                <h1>{lang.card.network.title}</h1>
              </header>

              <main>
                <Trans
                  i18nKey="pages.who-we-are.card.network.info"
                  components={{ strong: <strong />, p: <p /> }}
                />
              </main>
            </AboutUs>

            <AboutUs color="#CC6A51">
              <header>
                <img src={earthIcon} alt="Earth" />

                <h1>{lang.card.why.title}</h1>
              </header>

              <main>
                <Trans
                  i18nKey="pages.who-we-are.card.why.info"
                  components={{ strong: <strong />, p: <p /> }}
                />
              </main>
            </AboutUs>

            <img src={logo} alt="Logo" />
          </Card>
        </SectionOne>

        <Footer style={{ backgroundColor: '#0000000D' }} tint="dark" />
      </Content>
    </Container>
  );
}