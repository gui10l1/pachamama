import { useCallback, useMemo } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Card, Container, SectionOne, SectionThree, SectionTwo } from "./styles";
import { useTranslation } from "react-i18next";
import presidentBgOne from '../../assets/img/members/presidentBgOne.png';
import presidentBgTwo from '../../assets/img/members/presidentBgTwo.png';
import foundersBgOne from '../../assets/img/members/foundersBgOne.png';
import foundersBgTwo from '../../assets/img/members/foundersBgTwo.png';
import associatesBgOne from '../../assets/img/members/associatesBgOne.png';
import associatesBgTwo from '../../assets/img/members/associatesBgTwo.png';
import associatesBgThree from '../../assets/img/members/associatesBgThree.png';
import associatesBgFour from '../../assets/img/members/associatesBgFour.png';
import logoBlack from '../../assets/icons/logoBlack.svg';

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

export const Members = () => {
  const { t } = useTranslation();

  const lang = useMemo(() => {
    return t('pages.members');
  }, [t]);

  const getId = useCallback(() => {
    return Math.floor(Math.random() * 1E0).toString();
  }, []);

  const presidents = useMemo(() => {
    return [
      {
        id: getId(),
        name: 'Florence Dravet',
        institution: lang.sectionOne.presidents.florence.institution,
        interest: lang.sectionOne.presidents.florence.interest,
        job: lang.president.male,
        img: florence,
        links: [
          {
            text: 'Lattes',
            to: 'http://lattes.cnpq.br/8270095556059896',
          },
          {
            text: 'Orcid',
            to: 'https://orcid.org/0000-0002-3822-3627',
          },
          {
            text: 'Academia',
            to: 'https://ucb-br.academia.edu/FlorenceDravet',
          },
          {
            text: 'Travessias – Transdisciplinaridade e Criatividade',
            to: 'https://dgp.cnpq.br/dgp/espelhogrupo/334347',
          },
        ],
      },
      {
        id: getId(),
        name: 'Gabriel Caldas',
        institution: lang.sectionOne.presidents.gabriel.institution,
        interest: lang.sectionOne.presidents.gabriel.interest,
        job: lang.secretary.male,
        img: gabriel,
        links: [
          {
            text: 'Instagram',
            to: 'https://www.instagram.com/luisgabrielcaldasleon?utm_source=qr&igsh=MWxjNTRyZnYwNmR6Yw%3D%3D',
          }
        ]
      },
    ];
  }, [getId]);

  const founders = useMemo(() => {
    return [
      {
        id: getId(),
        name: 'Aleida C. Gelpi',
        institution: lang.sectionTwo.founders.aleida.institution,
        interest: lang.sectionTwo.founders.aleida.interest,
        img: aleida,
        job: lang.founder.female,
        links: [
          {
            text: 'ORCID',
            to: 'https://orcid.org/0000-0001-7461-218X',
          },
          {
            text: 'Linkedin',
            to: 'https://www.linkedin.com/in/aleida-carolina-gelpi-acosta-84a04a45/',
          },
        ],
      },
      {
        id: getId(),
        name: 'Cristina Mondragón',
        institution: lang.sectionTwo.founders.cristina.institution,
        interest: lang.sectionTwo.founders.cristina.interest,
        img: cristina,
        job: lang.founder.female,
        links: [
          {
            text: 'ORCID',
            to: 'https://orcid.org/0000-0003-3929-1565',
          }
        ],
      },
      {
        id: getId(),
        name: 'Luis A. Pérez Amezcua',
        institution: lang.sectionTwo.founders.luisAlberto.institution,
        interest: lang.sectionTwo.founders.luisAlberto.interest,
        img: luis,
        job: lang.founder.male,
        links: [
          {
            text: 'Academis.edu',
            to: 'https://guadalajara.academia.edu/LuisAlberto',
          },
          {
            text: 'Orcid',
            to: 'https://orcid.org/0000-0002-8336-7128',
          },
        ],
      },
      {
        id: getId(),
        name: 'Luis Owen Canting',
        institution: lang.sectionTwo.founders.luisOwen.institution,
        interest: lang.sectionTwo.founders.luisOwen.interest,
        img: luisOwen,
        job: lang.founder.male,
        links: [
          {
            text: 'Youtube',
            to: 'https://www.youtube.com/@luisocantingplaca7701',
          },
          {
            text: 'email: luis.canting@upr.edu',
            to: '',
          },
        ],
      },
      {
        id: getId(),
        name: 'Luis Pabón Battle',
        institution: lang.sectionTwo.founders.luisPablon.institution,
        interest: lang.sectionTwo.founders.luisPablon.interest,
        img: luis_pablon,
        job: lang.founder.male,
        links: [
          {
            text: 'Linkedin',
            to: 'https://www.linkedin.com/in/luis-h-pab%C3%B3n-batlle-17a068188/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=pr',
          }
        ],
      },
      {
        id: getId(),
        name: 'Duda Affonso',
        institution: lang.sectionTwo.founders.duda.institution,
        interest: lang.sectionTwo.founders.duda.interest,
        img: dudaAfonso,
        job: lang.founder.female,
        links: [
          {
            text: 'Ciência Vitae',
            to: 'https://cienciavitae.pt/portal/en/0F1F-4320-A9DD',
          },
          {
            text: 'Site Pessoal',
            to: 'https://dudaffonso.com/textos-publicacoes',
          },
          {
            text: 'Instagram',
            to: 'https://www.instagram.com/dudaffonso/',
          },
        ],
      },
      {
        id: getId(),
        name: 'Míriam Silva',
        institution: lang.sectionTwo.founders.miriam.institution,
        interest: lang.sectionTwo.founders.miriam.interest,
        img: miriam,
        job: lang.founder.female,
        links: [
          {
            text: 'PPGCC',
            to: 'https://comunicacaoecultura.uniso.br/',
          },
          {
            text: 'UNISO',
            to: 'https://uniso.br/uniso/identidade-visual',
          },
          {
            text: 'Lattes',
            to: 'https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4700186H8',
          },
        ],
      },
    ];
  }, [getId]);

  const associates = useMemo(() => {
    return [
      {
        id: getId(),
        name: 'Andriolli Costa',
        institution: lang.sectionThree.associates.andriolli.institution,
        interest: lang.sectionThree.associates.andriolli.interest,
        img: andriolli,
        job: lang.associate.male,
        links: [
          {
            text: 'Lattes',
            to: 'http://lattes.cnpq.br/6790145893762562',
          },
          {
            text: 'Podcast',
            to: 'https://www.podcastnarrativo.com.br/',
          },
        ]
      },
      {
        id: getId(),
        name: 'Vanessa de Moraes',
        institution: lang.sectionThree.associates.vanessa.institution,
        interest: lang.sectionThree.associates.vanessa.interest,
        img: vanessa,
        job: lang.associate.female,
        links: [
          {
            text: 'Lattes',
            to: 'http://lattes.cnpq.br/8314644813292366',
          },
          {
            text: 'Orcid',
            to: 'https://orcid.org/0000-0002-2368-2337',
          },
          {
            text: 'Instagram',
            to: 'https://www.instagram.com/leitoradoguimaraes.ipn/?igsh=MTUxdmpxajJqbWs2Mw%3D%3D',
          },
        ]
      },
      {
        id: getId(),
        name: 'Naví  Rodríguez',
        institution: lang.sectionThree.associates.navi.institution,
        interest: lang.sectionThree.associates.navi.interest,
        img: navi,
        job: lang.associate.female,
        links: [
          {
            text: 'FEV',
            to: 'https://fev-edu.wixsite.com/fev-',
          },
          {
            text: 'Orcid',
            to: 'https://orcid.org/0000-0002-2880-010',
          },
          {
            text: 'Facebook',
            to: 'https://www.facebook.com/laboratoriodenovelanicaragua/?locale=pt_BR',
          },
        ]
      },
      {
        id: getId(),
        name: 'Mabel Egle García',
        institution: lang.sectionThree.associates.mabel.institution,
        interest: lang.sectionThree.associates.mabel.interest,
        img: mabel,
        job: lang.associate.female,
        links: [
          {
            text: 'Orcid',
            to: 'https://orcid.org/0000-0002-3742-1867',
          },
          {
            text: 'Academia',
            to: 'https://ufro.academia.edu/MabelGarc%C3%ADaBarrera',
          },
        ]
      },
      {
        id: getId(),
        name: 'Gustavo de Castro',
        institution: lang.sectionThree.associates.gustavo.institution,
        interest: lang.sectionThree.associates.gustavo.interest,
        img: gustavo,
        job: lang.associate.male,
        links: [
          {
            text: 'Lattes',
            to: 'http://lattes.cnpq.br/8544052996023384',
          },
          {
            text: 'Orcid',
            to: 'https://orcid.org/0000-0001-7126-6947',
          },
          {
            text: 'Academia',
            to: 'https://unb.academia.edu/Gustavodecastrodasilva',
          },
          {
            text: 'Biocom',
            to: 'https://dgp.cnpq.br/dgp/espelhogrupo/706853',
          },
          {
            text: 'Grupo Siruiz',
            to: 'https://dgp.cnpq.br/dgp/espelhogrupo/269343',
          },
        ]
      },
      {
        id: getId(),
        name: 'José Manuel',
        institution: lang.sectionThree.associates.jose.institution,
        interest: lang.sectionThree.associates.jose.interest,
        img: jose,
        job: lang.associate.male,
        links: [
          {
            text: 'Site',
            to: 'https://ufro.academia.edu/MabelGarc%C3%ADaBarrera',
          },
        ]
      },
      {
        id: getId(),
        name: 'Hertz Wendell',
        institution: lang.sectionThree.associates.hertz.institution,
        interest: lang.sectionThree.associates.hertz.interest,
        img: hertz,
        job: lang.associate.male,
        links: [
          {
            text: 'Lattes',
            to: 'http://lattes.cnpq.br/2778413245735367',
          },
          {
            text: 'Instagram',
            to: 'https://www.instagram.com/neuromitologia/',
          },
        ]
      },
      {
        id: getId(),
        name: 'Alan Santos',
        institution: lang.sectionThree.associates.alan.institution,
        interest: lang.sectionThree.associates.alan.interest,
        img: alan,
        job: lang.associate.male,
        links: [
          {
            text: 'Lattes',
            to: 'http://lattes.cnpq.br/4603935709750613',
          },
        ]
      },
      {
        id: getId(),
        name: 'Alvaro E. C. Obando',
        institution: lang.sectionThree.associates.alvaro.institution,
        interest: lang.sectionThree.associates.alvaro.interest,
        img: alvaro,
        job: lang.associate.male,
        links: [
          {
            text: 'Universidade de Antioquia',
            to: 'https://www.udea.edu.co/wps/portal/udea/web/inicio/investigacion/areas-investigacion/inicio-fichas/fichas/facultad-educacion/unipluriversidad/!ut/p/z0/fY9NC8IwDIb_ijt4HJmKMo8yRJFN8DZ7kdh2W3S2sx_Dn29FEEXxlLx58vEGGJTAFPZUoyOtsA16z2aH7W66HI2zJE-LPE2CKHbz6XqV5SPYAPvfEDaMTZEVNbAOXROTqjSUFXLfOhSxFJ4jD8eg9Iq61hvqpbEkUDxG6XS9sgUwrpWTNwdlp43D1guJwwTtp2r0RT5zUr20LrzBKeKT6DhRgRuJdiDk4BesiDdo4zekX9UQv9wOky-33ZntU7uI7qvcKzg!/',
          },
        ]
      },
    ]
  }, [getId]);

  return (
    <Container>
      <Header />

      <SectionOne>
        <h1>{lang.sectionOne.title}</h1>

        {presidents.map((president, index) => {
          const bgs = [presidentBgOne, presidentBgTwo];

          return (
            <Card key={president.id} image={bgs[index % 2]}>
              <div>
                <div>
                  <img src={president.img} alt={president.name} />

                  <strong>{president.name}</strong>

                  <span>{president.job}</span>
                </div>

                <div>
                  <strong>{lang.institution}</strong>

                  <p>{president.institution}</p>

                  <strong>{lang.interest}</strong>

                  <p>{president.interest}</p>

                  <strong>{lang.usefulLinks}</strong>

                  <ul>
                    {president.links.map((link, index) => {
                      return (
                        <li key={index}>
                          <a href={link.to} target="_blank" rel="noreferrer">{link.text}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <img src={logoBlack} alt="Logo" className="card-logo" />
              </div>
            </Card>
          )
        })}
      </SectionOne>

      <SectionTwo>
        <h1>{lang.sectionTwo.title}</h1>

        {founders.map((founder, index) => {
          const bgs = [foundersBgOne, foundersBgTwo];

          return (
            <Card key={founder.id} image={bgs[index % 2]}>
              <div>
                <div>
                  <img src={founder.img} alt={founder.name} />

                  <strong>{founder.name}</strong>

                  <span>{founder.job}</span>
                </div>

                <div>
                  <strong>{lang.institution}</strong>

                  <p>{founder.institution}</p>

                  <strong>{lang.interest}</strong>

                  <p>{founder.interest}</p>

                  <strong>{lang.usefulLinks}</strong>

                  <ul>
                    {founder.links.map((link, index) => {
                      return (
                        <li key={index}>
                          <a href={link.to} target="_blank" rel="noreferrer">{link.text}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <img src={logoBlack} alt="Logo" className="card-logo" />
              </div>
            </Card>
          )
        })}
      </SectionTwo>

      <SectionThree>
        <h1>{lang.sectionThree.title}</h1>

        <div>
          {associates.map((associate, index) => {
            const bgs = [associatesBgOne, associatesBgTwo, associatesBgThree, associatesBgFour];

            return (
              <Card key={associate.id} image={bgs[index % 4]}>
                <div>
                  <div>
                    <img src={associate.img} alt={associate.name} />

                    <strong>{associate.name}</strong>

                    <span>{associate.job}</span>
                  </div>

                  <div>
                    <strong>{lang.institution}</strong>

                    <p>{associate.institution}</p>

                    <strong>{lang.interest}</strong>

                    <p>{associate.interest}</p>

                    <strong>{lang.usefulLinks}</strong>

                    <ul>
                      {associate.links.map((link, index) => {
                        return (
                          <li key={index}>
                            <a href={link.to} target="_blank" rel="noreferrer">{link.text}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <img src={logoBlack} alt="Logo" className="card-logo" />
                </div>
              </Card>
            );
          })}
        </div>
      </SectionThree>

      <Footer tint="dark" />
    </Container>
  );
}