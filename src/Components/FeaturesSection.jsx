import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"

const FeaturesSection = () => {
      const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
      direction : "right"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
      ,direction : "right"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
      ,direction : "right"
    }
  ]
  return (
    <section id = "about" className = "max-w-7xl mx-auto px-4 py-16 text-center">
        {/*Heading Text*/}
        <div className='mx-auto w-fit text-center'>
            <motion.h2 
                variants = {fadeIn("left" , 0.2)}
                initial = "hidden"
                whileInView="show"
    className = "font-bold text-4xl mb-5">How can we help your business?</motion.h2>
            <motion.p
                variants = {fadeIn("left" , 0.2)}
                initial = "hidden"
                whileInView="show"
            
            className = "text-gray-800 text-xl">when you resell besnik, you build trust and increase</motion.p>
        </div>
        {/*features box*/}
        <div className = "grid grid-cols-1 md:grid-cols-3 gap-14 py-12">
        {features.map((feature, index) => (
            <motion.div
                variants = {fadeIn(feature.direction , 0.2)}
                initial = "hidden"
                whileInView="show"
             key={index} className="flex flex-col items-center justify-center gap-2 p-8 text-center">
                <div 
                    className="p-7 rounded-full mb-10"
                    style={{ 
                        backgroundColor: index === 0 ? "#F1EFF0" : 
                                    index === 1 ? "#FEE7E7" : 
                                    index === 2 ? "#FFF3E4" : "transparent"
                    }}
                >
                    <div className="text-4xl">{feature.icon}</div>
                </div>
                <div className = "font-bold text-2xl">{feature.title}</div>
                <div className = "text-gray-800 text-lg">{feature.description}</div>
            </motion.div>
        ))}
        </div>
        {/*button*/}
        <motion.div
                 variants = {fadeIn("up" , 0.2)}
                initial = "hidden"
                whileInView="show">
        <button className = "cursor-pointer bg-blue-600 px-8 py-4 rounded-full text-white text-lg font-medium hover:bg-blue-900 transition-all hover:shadow-md hover:shadow-blue-200">Become a Partner</button>
        </motion.div>
    </section>
  )
}

export default FeaturesSection