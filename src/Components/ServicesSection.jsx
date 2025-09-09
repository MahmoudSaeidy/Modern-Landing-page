import React from 'react'
import { HiLightBulb } from "react-icons/hi"; 
import { BiTime } from "react-icons/bi"; 
import { FiSettings } from "react-icons/fi";
import { BsStack } from "react-icons/bs"; 
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"

const ServicesSection = () => {
    const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]
  return (
    <section className=' px-4 py-16 md:py-24 mx-auto container' id = "services">
            <div className='max-w-6xl w-full mx-auto flex flex-col md:flex-row justify-between gap-16 items-center'>
                {/*text Section*/}
                <div className='w-full md:w-1/2'>
                    <motion.h2
                    variants = {fadeIn("right" , 0.2)}
                    initial = "hidden"
                    whileInView="show"
                    className = "text-3xl md:text-4xl text-gray-900 font-bold mb-6">Future of support with new shape</motion.h2>
                    <motion.p
                    variants = {fadeIn("right" , 0.2)}
                    initial = "hidden"
                    whileInView="show"
                    className = "text-gray-600 mb-6 text-lg">discuss your goals, deterrmine success metrics, identify problems</motion.p>
                    <motion.div
                    variants = {fadeIn("right" , 0.3)}
                    initial = "hidden"
                    whileInView="show"
                    className='mb-4'>
                     <div className = "flex gap-2 mb-2 items-center">
                        <div className='w-6 h-6 flex justify-center items-center rounded-full bg-indigo-100'>
                            <div className = "w-3 h-3 rounded-full bg-indigo-500"></div>
                        </div>
                        <p className = "text-lg">UX design content strategy</p>
                    </div>
                    <div className = "flex gap-2 items-center">
                        <div className='w-6 h-6 flex justify-center items-center rounded-full bg-indigo-100'>
                            <div className = "w-3 h-3 rounded-full bg-indigo-500"></div>
                        </div>
                        <p className = "text-lg">Development bring</p>
                    </div>
                    </motion.div>
                    <motion.button
                    variants = {fadeIn("up" , 0.3)}
                    initial = "hidden"
                    whileInView="show"
                    className='text-white bg-indigo-500 px-6 py-3 font-bold text-lg rounded-full hover:bg-indigo-800 hover:shadow-lg transition-all cursor-pointer mt-6'>Get Started</motion.button>
                </div>
                {/*Services Section*/}
                <div className = "w-full md:max-w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto">
                {services.map((service , index)=>{
                    return(
                        <motion.div
                    variants = {fadeIn("up" , 0.3)}
                    initial = "hidden"
                    whileInView="show"
                        key = {index} className = "py-6 px-8 w-full p-2 md:p-8 border border-gray-100 rounded-xl hover:shadow-lg hover:scale-103 transition-all">
                            <div className = "service flex flex-col">
                                <div>{service.icon}</div>
                                <h3 className = 'text-xl font-bold my-4'>{service.title}</h3>
                                <div className = "text-lg text-gray-800">{service.description}</div>
                                <a href = {service.link} className='text-indigo-500 font-medium mt-4 hover:text-indigo-800 transition-all'>LEARN MORE </a>
                                
                            </div>
                        </motion.div>
                    )
                })}

                </div>
            </div>
    </section>
  )
}

export default ServicesSection