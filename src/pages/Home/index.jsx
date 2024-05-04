import { useCallback, useMemo, useRef } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import airIcon from '../../assets/icons/air.svg';
import aquaIcon from '../../assets/icons/aqua.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import arrowBlackIcon from '../../assets/icons/arrowBlack.svg';
import earthIcon from '../../assets/icons/earth.svg';
import fireIcon from '../../assets/icons/fire.svg';
import partnershipIcon from '../../assets/icons/partnership.svg';
import peopleIcon from '../../assets/icons/people.svg';
import searchIcon from '../../assets/icons/search.svg';
import userIcon from '../../assets/icons/user.svg';
import headphonesIcon from '../../assets/icons/headphones.svg';
import { Badge } from "../../components/Badge";
import { Header } from "../../components/Header";
import { Associate, CarouselControls, CarouselGroup, Container, Founder, Item, Items, MoreAbout, Row, Secretary, SectionFive, SectionFour, SectionOne, SectionThree, SectionTwo, Sponsor, SponsorRow } from "./styles";

import aleida from '../../assets/img/home/aleida.png';
import andriolli from '../../assets/img/home/andriolli.png';
import cristina from '../../assets/img/home/cristina.png';
import florence from '../../assets/img/home/florence.png';
import gabriel from '../../assets/img/home/gabriel.png';
import luis from '../../assets/img/home/luis.png';
import navi from '../../assets/img/home/navi.png';
import alan from '../../assets/img/home/alan.png';
import alvaro from '../../assets/img/home/alvaro.png';
import dudaAfonso from '../../assets/img/home/dudaAfonso.png';
import gustavo from '../../assets/img/home/gustavo.png';
import hertz from '../../assets/img/home/hertz.png';
import jose from '../../assets/img/home/jose.png';
import luis_pablon from '../../assets/img/home/luis_pablon.png';
import luisOwen from '../../assets/img/home/luisOwen.png';
import mabel from '../../assets/img/home/mabel.png';
import miriam from '../../assets/img/home/miriam.png';
import vanessa from '../../assets/img/home/vanessa.png';

import asteria from '../../assets/img/home/asteria.png';
import universidadPortoRico from '../../assets/img/home/universid-porto-rico.png';
import ucbLogo from '../../assets/img/home/ucb.png';
import { Faq } from "../../components/Faq";
import { Footer } from "../../components/Footer";
import { Trans, useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const PeopleIcon = () => <img src={peopleIcon} alt="People" />;
const UserIcon = () => <img src={userIcon} alt="User" />;
const SearchIcon = () => <img src={searchIcon} alt="Search" />
const PartnershipIcon = () => <img src={partnershipIcon} alt="Partnership" />
const ArrowIcon = ({ style }) => <img src={arrowIcon} alt="Arrow" style={style} />
const ArrowBlackIcon = ({ style }) => <img src={arrowBlackIcon} alt="Arrow Black" style={style} />
const HeadphonesIcon = () => <img src={headphonesIcon} alt="Headphones" />

const responsive = {
  large: {
    breakpoint: { max: 3000, min: 1440 },
    items: 4,
  },
  medium: {
    breakpoint: { max: 1440, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
}

export const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const foundersCarouselRef = useRef(null);
  const associatesCarouselRef = useRef(null);

  const language = useMemo(() => {
    return t('pages.home');
  }, [t]);

  const presidents = useMemo(() => {
    return [
      {
        name: 'Florence Dravet',
        job: language.sectionThree.president.male,
        img: florence,
      },
      {
        name: 'Gabriel Caldas',
        job: language.sectionThree.secretary.male,
        img: gabriel,
      },
    ];
  }, [language]);

  const founders = useMemo(() => {
    return [
      {
        name: 'Aleida C. Gelpi',
        job: language.sectionThree.founder.female,
        img: aleida,
      },
      {
        name: 'Cristina Mondragón',
        job: language.sectionThree.founder.female,
        img: cristina,
      },
      {
        name: 'Luis A. Pérez Amezcua',
        job: language.sectionThree.founder.male,
        img: luis,
      },
      {
        name: 'Luis Owen Canting',
        job: language.sectionThree.founder.male,
        img: luisOwen,
      },
      {
        name: 'Luis Pabón Battle',
        job: language.sectionThree.founder.male,
        img: luis_pablon,
      },
      {
        name: 'Duda Affonso',
        job: language.sectionThree.founder.female,
        img: dudaAfonso,
      },
      {
        name: 'Míriam Silva',
        job: language.sectionThree.founder.female,
        img: miriam,
      },
    ];
  }, [language]);

  const associates = useMemo(() => {
    return [
      {
        name: 'Andriolli Costa',
        job: language.sectionThree.associate.male,
        img: andriolli,
      },
      {
        name: 'Vanessa de Moraes',
        job: language.sectionThree.associate.male,
        img: vanessa,
      },
      {
        name: 'Naví  Rodríguez',
        job: language.sectionThree.associate.female,
        img: navi,
      },
      {
        name: 'Mabel Egle García',
        job: language.sectionThree.associate.female,
        img: mabel,
      },
      {
        name: 'Gustavo de Castro',
        job: language.sectionThree.associate.male,
        img: gustavo,
      },
      {
        name: 'José Manuel García',
        job: language.sectionThree.associate.male,
        img: jose,
      },
      {
        name: 'Hertz Wendell',
        job: language.sectionThree.associate.male,
        img: hertz,
      },
      {
        name: 'Alan Santos',
        job: language.sectionThree.associate.male,
        img: alan,
      },
      {
        name: 'Alvaro E. C. Obando',
        job: language.sectionThree.associate.male,
        img: alvaro,
      },
    ];
  }, [language]);

  const carouselProps = useMemo(() => {
    return {
      responsive,
      showDots: false,
      containerClass: 'carousel',
      itemClass: 'carousel-item',
      arrows: false,
    };
  }, []);

  const getCarouselRef = useCallback((type = 'founders') => {
    const refs = {
      founders: foundersCarouselRef,
      associates: associatesCarouselRef,
    };

    const ref = refs[type] || refs.founders;

    return ref;
  }, []);

  const handleCarouselForwards = useCallback((type = 'founders') => {
    const ref = getCarouselRef(type);

    ref?.current?.next();
  }, [getCarouselRef]);

  const handleCarouselBackwards = useCallback((type = 'founders') => {
    const ref = getCarouselRef(type);

    ref?.current?.previous();
  }, [getCarouselRef]);

  return (
    <Container>
      <Header />

      <SectionOne>
        <div>
          <Badge icon={PeopleIcon}>{language.sectionOne.badge}</Badge>

          <p>{language.sectionOne.title}</p>
        </div>

        <p>{language.sectionOne.description}</p>
      </SectionOne>

      <SectionTwo>
        <Badge icon={UserIcon}>{language.sectionTwo.badge}</Badge>

        <h1>{language.sectionTwo.title}</h1>

        <p>{language.sectionTwo.description}</p>

        <Items>
          <Item type="fire">
            <div>
              <img src={fireIcon} alt="fire" />

              <h1>{language.sectionTwo.cards.seminary.title}</h1>

              <p>{language.sectionTwo.cards.seminary.summary}</p>
            </div>
          </Item>

          <Item type="air">
            <div>
              <img src={airIcon} alt="air" />

              <h1>{language.sectionTwo.cards.colloquia.title}</h1>

              <p>{language.sectionTwo.cards.colloquia.summary}</p>
            </div>
          </Item>

          <Item type="earth">
            <div>
              <img src={earthIcon} alt="earth" />

              <h1>{language.sectionTwo.cards.community.title}</h1>

              <p>{language.sectionTwo.cards.community.summary}</p>
            </div>
          </Item>

          <Item type="aqua">
            <div>
              <img src={aquaIcon} alt="aqua" />

              <h1>{language.sectionTwo.cards.partnership.title}</h1>

              <p>{language.sectionTwo.cards.partnership.summary}</p>
            </div>
          </Item>
        </Items>
      </SectionTwo>

      <SectionThree>
        <header>
          <Badge icon={SearchIcon}>{language.sectionThree.badge}</Badge>

          <h1>{language.sectionThree.title}</h1>
        </header>

        <main>
          <Row>
            {presidents.map((item, index) => {
              return (
                <Secretary key={index} className="card">
                  <div>
                    <img src={item.img} alt={item.name} />

                    <strong>{item.name}</strong>

                    <span>{item.job}</span>
                  </div>
                </Secretary>
              );
            })}
          </Row>

          <CarouselGroup>
            <Carousel
              ref={foundersCarouselRef}
              {...carouselProps}
            >
              {founders.map((item, index) => {
                return (
                  <Founder key={index} className="card">
                    <div>
                      <img src={item.img} alt={item.name} />

                      <strong>{item.name}</strong>

                      <span>{item.job}</span>
                    </div>
                  </Founder>
                );
              })}
            </Carousel>

            <CarouselControls>
              <div>
                <button onClick={() => handleCarouselBackwards('founders')}>
                  <ArrowIcon />
                </button>

                <button onClick={() => handleCarouselForwards('founders')}>
                  <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
                </button>
              </div>

              <MoreAbout onClick={() => navigate('/members')}>
                <span>{language.sectionThree.moreAboutUs}</span>

                <ArrowBlackIcon />
              </MoreAbout>
            </CarouselControls>
          </CarouselGroup>

          <CarouselGroup>
            <Carousel
              ref={associatesCarouselRef}
              {...carouselProps}
            >
              {associates.map((item, index) => {
                return (
                  <Associate key={index} className="card">
                    <div>
                      <img src={item.img} alt={item.name} />

                      <strong>{item.name}</strong>

                      <span>{item.job}</span>
                    </div>
                  </Associate>
                );
              })}
            </Carousel>

            <CarouselControls>
              <div>
                <button onClick={() => handleCarouselBackwards('associates')}>
                  <ArrowIcon />
                </button>

                <button onClick={() => handleCarouselForwards('associates')}>
                  <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
                </button>
              </div>

              <MoreAbout onClick={() => navigate('/members')}>
                <span>{language.sectionThree.moreAboutUs}</span>

                <ArrowBlackIcon />
              </MoreAbout>
            </CarouselControls>
          </CarouselGroup>
        </main>
      </SectionThree>

      <SectionFour>
        <header>
          <Badge icon={PartnershipIcon}>{language.sectionFour.badge}</Badge>

          <h1>
            <Trans
              i18nKey="pages.home.sectionFour.title"
              components={{ br: <br /> }}
            />
          </h1>

          <p>{language.sectionFour.description}</p>
        </header>

        <main>
          <SponsorRow>
            <Sponsor>
              <img src={asteria} alt="asteria" width={348} height={51} style={{ marginTop: 35 }} />

              <p>{language.sectionFour.asteria}</p>
            </Sponsor>

            <Sponsor>
              <img src={universidadPortoRico} alt="universidadPortoRico" width={84} height={84} style={{ marginTop: 14 }} />

              <p>{language.sectionFour.portoRico}</p>
            </Sponsor>
          </SponsorRow>

          <SponsorRow>
            <Sponsor>
              <img src={ucbLogo} alt="ucbLogo" width={320} height={66} style={{ marginTop: 44 }} />

              <p>{language.sectionFour.ucb}</p>
            </Sponsor>
          </SponsorRow>
        </main>
      </SectionFour>

      <SectionFive>
        <header>
          <Badge icon={HeadphonesIcon}>FAQs</Badge>

          <h1>{language.sectionFive.title}</h1>

          <p>
            <Trans
              i18nKey="pages.home.sectionFive.description"
              components={{ Link: <a href="mailto:redlat.mitocritica@upr.edu" /> }}
            />
          </p>
        </header>

        <main>
          <Faq title={language.sectionFive.faqs[0].question}>
            <p>{language.sectionFive.faqs[0].answer}</p>
          </Faq>

          <Faq title={language.sectionFive.faqs[1].question}>
            <p>
              <Trans
                i18nKey="pages.home.sectionFive.faqsLink.answer"
                components={{ Link: <a href="https://docs.google.com/forms/d/1QJRSv_MPDsmalFopY8pMPfFaw31HyT_GdoVlOLOep4k/edit" target="_blank" rel="noreferrer" /> }}
              />
            </p>
          </Faq>

          <Faq title={language.sectionFive.faqs[2].question}>
            <p>{language.sectionFive.faqs[2].answer}</p>
          </Faq>

          <Faq title={language.sectionFive.faqs[3].question}>
            <p>{language.sectionFive.faqs[3].answer}</p>
          </Faq>

          <Faq title={language.sectionFive.faqs[4].question}>
            <p>{language.sectionFive.faqs[4].answer}</p>
          </Faq>

          <Faq title={language.sectionFive.faqs[5].question}>
            <p>{language.sectionFive.faqs[5].answer}</p>
          </Faq>

          <Faq title={language.sectionFive.faqs[6].question}>
            <p>{language.sectionFive.faqs[6].answer}</p>
          </Faq>
        </main>
      </SectionFive>

      <Footer />
    </Container>
  );
}