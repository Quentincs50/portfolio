
import { motion } from 'motion/react'
import { styles } from '../styles'
import { resume } from '../assets'
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className={`relative h-screen w-full mx-auto`}>
      <div
        className={`absolute top-[120px] w-full ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div></div>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>


      <div className='w-full'>
          <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                  Bienvenue, Je suis <span className='text-[#915EFF]'>Quentin</span>
              </h1>
              <div className=''>
                  <div className='flex flex-col sm:flex-row items-start sm:items-center gap-7 mt-2'>
                      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                          Je partage ici mes projets <br className='sm:block hidden' />
                          personnels et académiques
                      </p>
                      <div className='flex-shrink-0 mt-2 sm:mt-0 green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                          <button className='bg-tertiary px-6 py-3 rounded-[20px] hover:bg-opacity-80 transition-all'>
                              <a href={resume} download='resume' className='text-white font-medium'>
                                  Télécharger mon CV
                              </a>
                          </button>
                      </div>
                  </div>

              </div>

          </div>



        </div>
    </div>

    <ComputersCanvas />

      <div className=' absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero