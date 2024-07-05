
'use client';
import styles from "./public/style/page.module.css";
import Header from "./componets/header";
import Footer from "./componets/footer";
import Section from "./componets/section";
import HomeComponent from "./componets/home";
import About from "./componets/about";
import ContactForm from "./componets/contactForm";

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
      <Section dark={false} id="home"  width="100%" color="var(--primary-color)" backgroundColor="var(--tertiary-color)">
        <HomeComponent />
      </Section>
      <Section dark={true} id="about" width="100%" color="var(--tertiary-color)" backgroundColor="var(--primary-color)">
        <About />
      </Section>
      <Section dark={false} id="formContact"  width="100%" color="var(--primary-color)" backgroundColor="var(--tertiary-color)">
        <ContactForm />
      </Section>
      <Footer />
    </main>
  );
}