'use client'
import React from 'react'
import { motion } from "framer-motion";
import { useLanguage } from './LanguageProvider';

type TTitlePropType = {
    title?: string,
}

const Titles: React.FC<TTitlePropType> = (props) => {

    const { title } = props;
    const { t } = useLanguage();

    const fadeInVariant = {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: { opacity: 1, filter: 'blur(0px)' }
    };

    return (
        <motion.div className='w-full flex justify-center items-center mt-8 mb-2'
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ duration: 1 }}
        >
            <div className='text-center font-bold p-2 border-t-2 border-b-2 px-6'>
                {t(title ?? '')}
            </div>
        </motion.div>
    )
}
export default Titles;