import { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Toast from "./Toast";

const Contact = () => {
  const formRef = useRef();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });



  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.message.trim()) {
      setToastType('error');
      setToastOpen(true);
      
      return;
    }

    // Validation de l'email (regex simple)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setToastType('error');
      setToastOpen(true);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Quentin Sanchez",
          from_email: form.email,
          to_email: "quentindsanchez@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setToastType('success');
          setToastOpen(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Erreur d'envoi:", error);
          setToastType('error');
          setToastOpen(true);


        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Travaillons ensemble</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre nom</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre mail</span>
            <input
              type='email'
              name='email'
              value={form.email}
              required
              onChange={handleChange}
              placeholder="votre@email.fr"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              required
              onChange={handleChange}
              placeholder="Votre message..."
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >

            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      <Toast
        isOpen={toastOpen}
        onClose={() => setToastOpen(false)}
        type={toastType}
        title={toastType === 'success' ? 'Message envoyé !' : "Erreur d'envoi"}
        description={toastType === 'success'
          ? 'Merci pour votre message ! Je reviendrai vers vous dans les plus brefs délais.'
          : "Une erreur est survenue lors de l'envoi. Veuillez réessayer ultérieurement."}
        duration={5000}
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");