import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ArrowButton, Card, Container, SectionOne, SectionThree, SectionTwo } from "./styles";
import aqua from '../../assets/img/seminar/aqua.png';
import { useTranslation } from "react-i18next";
import { useCallback, useMemo } from "react";
import arrow from '../../assets/icons/arrow.svg';
import carouselArrow from '../../assets/icons/carouselArrow.svg';
import mock from '../../assets/img/seminar/mock.png';
import Carousel from "react-multi-carousel";
import { format } from 'date-fns';

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

const LeftArrow = ({ onClick }) => {
  return (
    <ArrowButton onClick={() => onClick()}>
      <img src={carouselArrow} alt="Arrow" style={{ transform: 'rotate(180deg)' }} />
    </ArrowButton>
  );
}

const RightArrow = ({ onClick }) => {
  return (
    <ArrowButton onClick={() => onClick()} right={true}>
      <img src={carouselArrow} alt="Arrow" />
    </ArrowButton>
  );
}

export const Seminar = () => {
  const { t } = useTranslation();

  const lang = useMemo(() => {
    return t('pages.seminar');
  }, [t]);

  const getId = useCallback(() => {
    return Math.floor(Math.random() * 1E0).toString();
  }, []);

  const videosLastYear = useMemo(() => {
    return [
      {
        id: getId(),
        title: `${lang.seminar} I`,
        description: `${lang.host.female}: Florence Dravet`,
        date: new Date(2023, 2, 4),
        img: mock,
        link: 'https://drive.google.com/file/d/1ASJ7i7CsTHyGDgoHvaRUyPcMysMesS0z/view?usp=drive_link',
      },
      {
        id: getId(),
        title: `${lang.seminar} II`,
        description: `${lang.host.male}: Gabriel Caldas`,
        date: new Date(2023, 2, 6),
        img: mock,
        link: 'https://drive.google.com/file/d/1Ah-JfyD4CcoU864YLxazUFe5dYplJqWO/view?usp=drive_link',
      },
      {
        id: getId(),
        title: `${lang.seminar} III`,
        description: `${lang.host.female}: Duda Affonso`,
        date: new Date(2023, 5, 3),
        img: mock,
        link: 'https://drive.google.com/file/d/1673CA_tYAmuraJhQMmGZ2RdRimxfNWIv/view?usp=drive_link',
      },
      {
        id: getId(),
        title: `${lang.seminar} IV`,
        description: `${lang.host.male}: Luis Pablón`,
        date: new Date(2023, 6, 1),
        img: mock,
        link: 'https://drive.google.com/file/d/1D3Yp6D139xdLMQpFQloqmOfeBXvYdJz7/view?usp=drive_link',
      },
      {
        id: getId(),
        title: `${lang.seminar} V`,
        description: `${lang.host.female}: Miriam Silva`,
        date: new Date(2023, 7, 5),
        img: mock,
        link: 'https://drive.google.com/file/d/18fve5Z011Dir9_4v1pB1tM-N2JrsuARu/view?usp=drive_link',
      },
      {
        id: getId(),
        title: `${lang.seminar} VI`,
        description: `${lang.host.female}: Cristina Mondragon`,
        date: new Date(2023, 8, 2),
        img: mock,
        link: 'https://drive.google.com/file/d/1Bx1xW5DxdJr1es9SkLDChsvbJM8_sktb/view?usp=drive_link',
      },
      {
        id: getId(),
        title: `${lang.seminar} VII`,
        description: `${lang.host.female}: Aleida Gelpi`,
        date: new Date(2023, 9, 7),
        img: mock,
        link: 'https://drive.google.com/file/d/1-7EyhaVqJPAbtwHD6-m-1sxHJNew02D4/view?usp=drive_link',
      },
      {
        id: getId(),
        title: `${lang.seminar} VIII`,
        description: `${lang.host.male}: Luis Alberto Perez Amezcua`,
        date: new Date(2023, 10, 4),
        img: mock,
        link: 'https://drive.google.com/file/d/1FHF7EFxmK7ACK8PMrl6VLwLKR34T2DGh/view?usp=drive_link',
      },
      {
        id: getId(),
        title: `${lang.seminar} IX`,
        description: 'Organización Congreso',
        date: new Date(2023, 11, 9),
        img: mock,
        link: 'https://drive.google.com/file/d/1AhiYmWB8WoTX41sRMSR5cnzvp_CIUftp/view?usp=drive_link',
      },
    ].sort((a, b) => {
      const dateA = a.date.getTime();
      const dateB = b.date.getTime();

      return dateA - dateB;
    });
  }, [getId, lang]);

  const videosCurrentYear = useMemo(() => {
    return [
      {
        id: getId(),
        title: `${lang.seminar} I`,
        description: `${lang.host.male}: Miriam Silva e Florence Dravet`,
        date: new Date(2024, 1, 2),
        img: mock,
        link: 'https://drive.google.com/file/d/1Dp5ePFaXfh7pyLMXZeL3_N7368-RZYuW/view?usp=drive_link',
      },
      {
        id: getId(),
        title: `${lang.seminar} II`,
        description: `${lang.host.female}: Naví Rodríguez`,
        date: new Date(2024, 2, 2),
        img: mock,
        link: 'https://drive.google.com/file/d/1yG9UwU9ranxBhzlnBeCD-m9mvHHrjjMM/view?usp=drive_link',
      },
      {
        id: getId(),
        title: `${lang.seminar} III`,
        description: `${lang.host.female}: Vanessa de Moraes`,
        date: new Date(2024, 3, 6),
        img: mock,
        link: 'https://drive.google.com/file/d/14W-wnfgYilanrrHVGKh-ITSqzHDJ9ZXp/view?usp=drive_link',
      },
    ].sort((a, b) => {
      const dateA = a.date.getTime();
      const dateB = b.date.getTime();

      return dateA - dateB;
    });
  }, [getId, lang]);

  const carouselProps = useMemo(() => {
    return {
      responsive,
      showDots: false,
      containerClass: 'carousel',
      itemClass: 'carousel-item',
      partialVisible: false,
      customLeftArrow: <LeftArrow />,
      customRightArrow: <RightArrow />,
    };
  }, []);

  const openVideoLink = useCallback((link) => {
    if (!link) return;

    window.open(link);
  }, []);

  return (
    <Container>
      <Header />

      <SectionOne>
        <header>
          <div>
            <img src={aqua} alt="Aqua" />

            <h1>{lang.sectionOne.title}</h1>
          </div>

          <button>
            {lang.sectionOne.seeMore}

            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <main>
          <p>{lang.sectionOne.description}</p>
        </main>
      </SectionOne>

      <SectionTwo>
        <main>
          <strong>{lang.sectionTwo.indicator}</strong>

          <Carousel {...carouselProps}>
            {videosLastYear.map(item => (
              <Card key={item.id} onClick={() => openVideoLink(item.link)}>
                <div>
                  <img src={item.img} alt={item.title} />

                  <strong>{item.title}</strong>

                  <p>{item.description}</p>

                  <span>{format(item.date, 'dd/MM/yyyy')}</span>
                </div>
              </Card>
            ))}
          </Carousel>
        </main>
      </SectionTwo>

      <SectionThree>
        <main>
          <strong>{lang.sectionThree.indicator}</strong>

          <Carousel {...carouselProps}>
            {videosCurrentYear.map(item => (
              <Card key={item.id} onClick={() => openVideoLink(item.link)}>
                <div>
                  <img src={item.img} alt={item.title} />

                  <strong>{item.title}</strong>

                  <p>{item.description}</p>

                  <span>{format(item.date, 'dd/MM/yyyy')}</span>
                </div>
              </Card>
            ))}
          </Carousel>
        </main>
      </SectionThree>

      <Footer style={{ backgroundColor: '#0000000D' }} tint="dark" />
    </Container>
  );
}