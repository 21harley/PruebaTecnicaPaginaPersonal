import React, { useState } from 'react';
import styles from './contactForm.module.css';
import Alert from '../../alert';
export default function ContactForm() {
  const [form,setForm] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    message: '',
    color: '',
    backgroundColor: '',
    time: 3000,
    position: 'top',
  });


  function alertMessageFunction(message: string, color: string, backgroundColor: string) {
    setAlertMessage({...alertMessage, message: message, color: color, backgroundColor: backgroundColor});
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alertMessageFunction('Todos los campos son obligatorios', 'white','red');
      return;
    }

    if (form.name.length < 3) {
      alertMessageFunction('El nombre debe tener al menos 3 caracteres', 'white' ,'red');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alertMessageFunction('Por favor, introduce un correo electrónico válido','white','red');
      return;
    }
    
    setAlertMessage({...alertMessage, position:'right'});
    alertMessageFunction('Se a enviado el formulario','white','green');
    console.log( form.name, form.email, form.message );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label className={styles.label}>
        Nombre:
        <input 
          type="text" 
          value={form.name} 
          onChange={(e) => setForm({...form,name:e.target.value})} 
          className={styles.input} 
          required 
        />
      </label>
      <label className={styles.label}>
        Email:
        <input 
          type="email" 
          value={form.email} 
          onChange={(e) => setForm({...form,email:e.target.value})} 
          className={styles.input} 
          required 
        />
      </label>
      <label className={styles.label}>
        Mensaje:
        <textarea 
          value={form.message} 
          onChange={(e) => setForm({...form,message:e.target.value})} 
          className={styles.textarea} 
          required 
        />
      </label>
      <button type="submit" className={styles.button}>Enviar</button>
      {alert && <Alert 
        text={alertMessage.message}
        color = {alertMessage.color}
        backgroundColor = {alertMessage.backgroundColor}
        time =  {alertMessage.time}
        position =  {alertMessage.position}
       />}
    </form>
  );
};


