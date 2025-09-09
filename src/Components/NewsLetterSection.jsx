import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"

const NewsLetterSection = () => {
  return (
    <section className = "mx-auto container px-4 md:px-6 lg:px-8 py-16">
        <div className = "bg-blue-600 rounded-2xl overflow-hidden">
            <div className = "relative w-full md:px-16 py-16 px-6 md:py-24 flex justify-between items-center">
                {/*graident bg*/}
                <div className = "absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant"></div>

                <div className = "relative w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-center">
                {/*left content*/}
                 <div className='text-center lg:text-left'>
                    <motion.h2
                              variants = {fadeIn("right" , 0.2)}
                              initial = "hidden"
                              whileInView="show"
                    className = "text-2xl md:text-3xl lg:text-4xl mb-6 text-white font-bold">Subscribe newsLetter</motion.h2>
                    <motion.p
                              variants = {fadeIn("left" , 0.2)}
                              initial = "hidden"
                              whileInView="show"
                    className='text-sm md:text-md text-blue-100 text-medium '>Best cooks and best delivery guys all at your service. Hot tasty food</motion.p>
                </div>
                
                {/*Right Content*/}
                <motion.div
                          variants = {fadeIn("left" , 0.2)}
          initial = "hidden"
          whileInView="show"
                className = "flex flex-col sm:flex-row items-stretch w-full sm:w-auto gap-2 sm:gap-0">
                    <input type = "email" placeholder='Enter your email address'
                    className = "text-black-900 bg-white border border-gray-100 w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none" />
                    <button className = "whitespace-nowrap w-full bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg sm:w-auto w-full cursor-pointer"><span className='text-lg'>Discover <ArrowRightAltIcon /> </span></button>
                </motion.div>

                </div>

            </div>
        </div>
        <style>
            {
                `.clip-path-slant {
                    clip-path: polygon(20% 0% , 100% 0% , 100% 100% , 0% 100%)
                }`
            }
        </style>
    </section>
  )
}

export default NewsLetterSection