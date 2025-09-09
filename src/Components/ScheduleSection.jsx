import React from 'react'
import scheduleImage from "../assets/stats.webp"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"

const ScheduleSection = () => {
  return (
    <section className = "max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className='flex flex-col md:flex-row justify-center items-center gap-16'>
        {/* Left */}
        <motion.div
        variants = {fadeIn("right" , 0.2)}
        initial = "hidden"
        whileInView="show"
        className = "w-full md:w-1/2">
          <img src = {scheduleImage} alt = "Schedule image" className='w-full h-auto hover:scale-102 transition-all' ></img>
        </motion.div>
        {/* Right */}
        <div className='w-full md:w-1/2'>
          <motion.p 
          variants = {fadeIn("left" , 0.2)}
          initial = "hidden"
          whileInView="show"
          className='text-orange-500 font-bold text-xl'>SCHEDULE</motion.p>
          <motion.h2
           variants = {fadeIn("left" , 0.3)}
          initial = "hidden"
          whileInView="show" className='text-3xl lg:text-4xl font-bold mt-4'>Streamline Your Business With Smart Scheduling Solutions</motion.h2>
          <motion.p
          variants = {fadeIn("left" , 0.4)}
          initial = "hidden"
          whileInView="show"
          className='mt-6 text-gray-700 text-lg lg:text-xl'>Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.</motion.p>
          <motion.div
           variants = {fadeIn("left" , 0.4)}
          initial = "hidden"
          whileInView="show"
           className = "flex items-center gap-2 mt-6 hover:gap-4 transition-all">
          <div className='text-xl text-blue-500 font-bold cursor-pointer w-fit'>Explore Scheduling features </div>
          <ArrowRightAltIcon className='text-xl text-blue-500 font-bold cursor-pointer w-fit'/>
          </motion.div>
        </div>
        </div>
    </section>
  )
}

export default ScheduleSection