import React from 'react'
import monitorImage from "../assets/monitor-card.webp"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"

const MonitorSection = () => {
  return (
    <section className = "max-w-7xl mx-auto px-4 py-12 md:py-22">
        <div className='flex flex-col md:flex-row justify-center items-center gap-16'>
        {/* Left */}
        <div className='w-full md:w-1/2 md:pl-4'>
          <motion.p
          variants = {fadeIn("right" , 0.2)}
          initial = "hidden"
          whileInView="show"
          className='text-green-500 font-bold text-xl'>MONITOR</motion.p>
          <motion.h2
          variants = {fadeIn("right" , 0.3)}
          initial = "hidden"
          whileInView="show"
          className='text-3xl lg:text-4xl font-bold mt-4'>Introducing best mobile carousels</motion.h2>
          <motion.p
          variants = {fadeIn("right" , 0.3)}
          initial = "hidden"
          whileInView="show"
          className='mt-6 text-gray-700 text-lg lg:text-xl'>Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</motion.p>
          <motion.div
          variants = {fadeIn("right" , 0.4)}
          initial = "hidden"
          whileInView="show"
          className = "flex items-center gap-2 mt-6 hover:gap-4 transition-all">
          <div className='text-xl text-blue-500 font-bold cursor-pointer w-fit'>Learn more about monitoring</div>
          <ArrowRightAltIcon className='text-xl text-blue-500 font-bold cursor-pointer w-fit'/>
          </motion.div>
        </div>
        {/* Right */}
        <motion.div
          variants = {fadeIn("left" , 0.2)}
          initial = "hidden"
          whileInView="show"
        className = "w-full md:w-1/2">
          <img src = {monitorImage} alt = "Schedule image" className='w-full h-auto hover:scale-102 transition-all'></img>
        </motion.div>
        </div>
    </section>
  )
}

export default MonitorSection