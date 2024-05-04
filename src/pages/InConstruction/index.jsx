import { useTranslation } from "react-i18next";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, SectionOne } from "./styles";
import { useMemo } from "react";


export const InConstruction = () => {
  const { t } = useTranslation();

  const lang = useMemo(() => {
    return t('pages.in-construction');
  }, [t]);

  console.log(lang);

  return (
    <Container>
      <Header />

      <SectionOne>
        <div>
          <h1>{lang.title}</h1>

          <p>{lang.description}</p>
        </div>
      </SectionOne>

      <Footer tint="dark" />
    </Container>
  );
}