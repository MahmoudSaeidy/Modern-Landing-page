import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"

const PurposeSection = () => {
     const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];
  return (
    <section className='w-full bg-gray-50 px-4 py-16 sm:px-6 md:px-8'>
        <div className='max-w-6xl mx-auto'>
            <div className = "grid md:grid-cols-3 grid-cols-1 gap-8">
            {/*Heading text*/}
            <motion.div 
                variants = {fadeIn("up" , 0.3)}
                initial = "hidden"
                whileInView="show"
            
            className = "">
            <p className = "text-sm text-purple-600 font-medium">ACHIEVE MORE</p>
            <h2 className = "text-3xl md:w-4/5 w-full font-bold md:text-4xl text-gray-900">Purpose of a convoy is to keep your team</h2>
            </motion.div>
            {/*bullet points*/}
            
                {features.map((feature , index)=>{
                    return(
                    <motion.div
                        variants = {fadeIn("right" , 0.4)}
                        initial = "hidden"
                        whileInView="show" 
                        className = "text-xl flex ">
                        <div><div className = "text-md mr-4">{feature.icon}</div></div>
                    <div>
                    <div className = "font-bold mb-2">{feature.title}</div>
                    <div className = "text-gray-900">{feature.description}</div>
                    </div>
                    </motion.div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default PurposeSection