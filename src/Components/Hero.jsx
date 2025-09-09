import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import heroImage from '../assets/hero-image.png'
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"


const Hero = () => {
return (
<section id = "home" className = "container mx-auto pt-44 pb-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center ">
{/*Left col*/}
<div className = "w-full md:w-1/2 space-y-8 pb-22 md:pb-0">
{/*Star badge*/}
<motion.div
    variants = {fadeIn("right" , 0.2)}
    initial = "hidden"
    whileInView="show"
    viewport={{once : true}}
>
<div className='flex gap-2 items-center bg-gray-50 py-2 px-4 w-fit rounded-full group hover:bg-gray-100 cursor-pointer transition-all'>
<span className='group-hover:scale-110 transition-transform relative w-6 h-6 items-center justify-center duration-300 origin-center'><StarIcon className='text-blue-600 group-hover:text-amber-600 transition-all transition-all absolute w-6 h-6'/></span>
<span>Jump star your growth</span>
</div>
</motion.div>
<motion.h1
    variants = {fadeIn("right" , 0.3)}
    initial = "hidden"
    whileInView="show"
    viewport={{once : true}}
    className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight '>We boost the growth for 
    <span className='text-blue-600 relative inline-block'> Startup to Fortune 500</span> Companies<span>⏰<span></span></span>
</motion.h1>
<motion.p
    variants = {fadeIn("up" , 0.4)}
    initial = "hidden"
    whileInView="show"
    className='text-gray-600 text-lg md:text-xl max-w-lg'>Get the most accurate leads, sales people traning and conversions tools and more _ all within the same one billing.</motion.p>
<motion.div
    variants = {fadeIn("up" , 0.5)}
    initial = "hidden"
    whileInView="show"
     className='flex max-w-md gap-3'>
    <input type = "email" placeholder='Enter your email' className=' flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 foucs:ring-blue-100 transition-all'/>
    <button className='bg-blue-600 p-4 rounded-xl cursor-pointer hover:bg-blue-800 transition hover:shadow-lg hover:shadow-blue-200'><DoubleArrowIcon className='text-white'/></button>
</motion.div>
</div>
{/*Right Col*/}
<div className = "w-full md:w-1/2 space-y-8">
<motion.div
    variants = {fadeIn("left" , 0.3)}
    initial = "hidden"
    whileInView="show"
 className='rounded-xl ml-0 md:ml-14'>
<img src={heroImage} alt  = "hero img" className = "hover:scale-102 transition-all"></img>
</motion.div>
</div>
</section>
)
}
export default Hero
