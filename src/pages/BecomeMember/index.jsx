import { Trans, useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Card, Container, Content, Item, Items, Overlay, SectionOne } from './styles';
import { useMemo } from 'react';
import airIcon from '../../assets/icons/air.svg';
import aquaIcon from '../../assets/icons/aqua.svg';
import earthIcon from '../../assets/icons/earth.svg';
import fireIcon from '../../assets/icons/fire.svg';
import arrowBlack from '../../assets/icons/arrowBlack.svg';
import logo from '../../assets/img/be-one-of-us/logo.png';

export const BecomeMember = () => {
  const { t } = useTranslation();

  const lang = useMemo(() => {
    return t('pages.become-member');
  }, [t]);

  return (
    <Container>
      <Overlay />

      <Content>
        <Header />

        <SectionOne>
          <Card>
            <img src={logo} alt="Logo" />

            <h1>
              <Trans
                i18nKey="pages.become-member.title"
                components={{ br: <br /> }}
              />
            </h1>

            <p>{lang.description}</p>

            <Items>
              <Item type="fire">
                <div>
                  <img src={fireIcon} alt="fire" />

                  <h1>{lang.cards.seminary.title}</h1>

                  <p>{lang.cards.seminary.summary}</p>
                </div>
              </Item>

              <Item type="air">
                <div>
                  <img src={airIcon} alt="air" />

                  <h1>{lang.cards.colloquia.title}</h1>

                  <p>{lang.cards.colloquia.summary}</p>
                </div>
              </Item>

              <Item type="earth">
                <div>
                  <img src={earthIcon} alt="earth" />

                  <h1>{lang.cards.community.title}</h1>

                  <p>{lang.cards.community.summary}</p>
                </div>
              </Item>

              <Item type="aqua">
                <div>
                  <img src={aquaIcon} alt="aqua" />

                  <h1>{lang.cards.partnership.title}</h1>

                  <p>{lang.cards.partnership.summary}</p>
                </div>
              </Item>
            </Items>

            <button
              type="button"
              onClick={() => window.open('https://docs.google.com/forms/d/1QJRSv_MPDsmalFopY8pMPfFaw31HyT_GdoVlOLOep4k/edit')}
            >
              {lang.becomeMemberButton}

              <img src={arrowBlack} alt="Icon" />
            </button>

            <img src={logo} alt="Logo" />
          </Card>
        </SectionOne>

        <Footer style={{ backgroundColor: '#0000000D' }} tint="dark" />
      </Content>
    </Container>
  );
}