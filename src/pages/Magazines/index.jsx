import { useCallback, useMemo } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Container, Item, Items, SectionOne } from "./styles"
import { Trans, useTranslation } from "react-i18next";
import earth from '../../assets/img/magazines/earth.png';
import contemplator from '../../assets/img/magazines/CONTEMPLATOR.png';
import esfera from '../../assets/img/magazines/esfera.png';
import amaltea from '../../assets/img/magazines/amaltea.png';

export const Magazines = () => {
  const { t } = useTranslation();

  const lang = useMemo(() => {
    return t('pages.magazines');
  }, [t]);

  const handleOpenLink = useCallback(link => {
    window.open(link || '');
  }, []);

  return (
    <Container>
      <Header />

      <SectionOne>
        <header>
          <img src={earth} alt="Logo" />

          <h1>{lang.title}</h1>
        </header>

        <main>
          <Items>
            <Item>
              <img src={contemplator} alt="contemplator" />

              <strong>
                <Trans
                  i18nKey="pages.magazines.magazines.contemplator"
                  components={{ br: <br /> }}
                />
              </strong>

              <button
                onClick={() => handleOpenLink('https://sites.google.com/view/universicontemplator1/inicio')}
              >
                {lang.magazines.accessButton}
              </button>
            </Item>

            <Item>
              <img src={esfera} alt="esfera" />

              <strong>{lang.magazines.esfera}</strong>

              <button
                onClick={() => handleOpenLink('https://portalrevistas.ucb.br/index.php/esf/index')}
              >
                {lang.magazines.accessButton}
              </button>
            </Item>

            <Item>
              <img src={amaltea} alt="amaltea" />

              <strong>{lang.magazines.amaltea}</strong>

              <button
                onClick={() => handleOpenLink('https://revistas.ucm.es/index.php/AMAL')}
              >
                {lang.magazines.accessButton}
              </button>
            </Item>
          </Items>
        </main>
      </SectionOne>

      <Footer tint="dark" style={{ backgroundColor: '#0000000D' }} />
    </Container>
  )
}