import { motion } from "motion/react";

export const TechBadge = ({ name, icon }) => (
    <motion.div
        whileTap={{ scale: 0.9, rotate: 8 }}
        className='w-full h-full rounded-full bg-tertiary border border-white/10
               flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]'
    >
        <img src={icon} alt={name} className='w-1/2 h-1/2 object-contain' />
    </motion.div>
);