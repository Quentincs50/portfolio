import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Présentation.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Après cinq ans passés dans des laboratoires pharmaceutiques et de recherche,
        j'ai développé de solides compétences techniques et analytiques.
        Mais une question revenait sans cesse : <span className='text-white font-semibold'>et si je créais quelque chose de mes propres mains ? </span>
        C'est ainsi qu'a débuté ma reconversion. En autodidacte, j'ai plongé dans le CS50 de Harvard,
        découvrant un univers où logique et créativité se rencontrent.
        Chaque ligne de code devenait une expérience, chaque projet un nouveau défi à relever.
        Aujourd'hui, je poursuis cette transformation à Epitech,
        déterminé à transformer cette passion en expertise professionnelle et à construire
        des solutions qui ont un impact réel.

      </motion.p>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");