import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"

const PricingSection = () => {
  const [productCount , setProductCount] = useState(1)
  //calculate product price base on product count
  const starterPrice = Math.round(4000 * (productCount / 50))
  const businessPrice = Math.round(7500 * (productCount / 50))

  return (
    <section className = "py-20 px-4 bg-gray-50">
      <div className='max-w-6xl mx-auto'>
         {/*Head*/}
        <motion.h2
          variants = {fadeIn("down" , 0.2)}
          initial = "hidden"
          whileInView="show"
        className = "text-3xl md:text-4xl font-bold text-center mb-8">Pricing</motion.h2>
        {/*Starter Plan & Business Plan*/}
        <div className = "flex justify-between items-center md:flex-row flex-col p-6 gap-8">
          {/*Starter Plan */}
          <motion.div
          variants = {fadeIn("right" , 0.2)}
          initial = "hidden"
          whileInView="show"
          className='px-6 bg-white w-full md:w-1/2 shadow-md rounded-lg py-12'>
            <h3 className='text-xl md:text-2xl text-gray-500 font-medium'>Starter</h3>
            <p className='text-3xl md:text-4xl text-gray-black-900 font-bold mt-4'> ${starterPrice}/Mo</p>
          </motion.div>
          {/*Starter Plan */}
          <motion.div
          variants = {fadeIn("left" , 0.2)}
          initial = "hidden"
          whileInView="show"
          className='px-6 bg-white w-full md:w-1/2 shadow-md rounded-lg py-12'>
            <h3 className='text-xl md:text-2xl text-gray-500 font-medium'>Business</h3>
            <p className='text-3xl md:text-4xl text-gray-black-900 font-bold mt-4'> ${businessPrice}/Mo</p>
          </motion.div>
        </div>
        {/*slider*/}
        <motion.div
          variants = {fadeIn("left" , 0.2)}
          initial = "hidden"
          whileInView="show"
        className='text-center max-w-xl w-full p-6 mx-auto'>
        <p className = "mb-4 text-2xl font-medium">{productCount} products</p>
        <Slider aria-label="Default" valueLabelDisplay="auto" value = {productCount} onChange={(e)=>{parseInt(setProductCount(e.target.value))}}/>    
        </motion.div>
        {/*ready Button*/}
        <motion.div
          variants = {fadeIn("up" , 0.2)}
          initial = "hidden"
          whileInView="show"
        className='mx-auto p-4 max-w-xl w-full text-center'>
          <p className='mb-8 text-2xl font-medium'>Ready To get Started ?</p>
          <button className='text-xl cursor-pointer font-bold px-6 py-3 bg-blue-600 rounded-xl text-white hover:bg-blue-900 hover:shadow-md hover:shadow-blue-200 transition-all'>Get Started</button>

        </motion.div>

        
      
      </div>
   
    </section>
  )
}

export default PricingSection