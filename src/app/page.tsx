
'use client';
import styles from "./public/style/page.module.css";
import Header from "./componets/header";
import Footer from "./componets/footer";
import Section from "./componets/section";
import HomeComponent from "./componets/home";

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
      <Section dark={false} id="home" height="100vh" width="100%" color="var(--primary-color)" backgroundColor="var(--tertiary-color)">
        <HomeComponent />
      </Section>
      <Section dark={true} id="about" height="100vh" width="100%" color="var(--tertiary-color)" backgroundColor="var(--primary-color)">
        <h1 >About</h1>
      </Section>
      <Section dark={false} id="formContact" height="100vh" width="100%" color="var(--primary-color)" backgroundColor="var(--tertiary-color)">
        <h1 >Contact form</h1>
      </Section>
      <Footer />
    </main>
  );
}