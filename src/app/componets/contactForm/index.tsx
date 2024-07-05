import React from 'react';
import ContactFormApp from './contactFormApp/index';
import styles from './contactForm.module.css';

export default function ContactForm() {
    return (
        <div className={styles.container}>
          <h1>Formulario de Contacto</h1>
          <ContactFormApp />
        </div>
      );
}

