import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import StarIcon from '@mui/icons-material/Star';
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../swiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe", 
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg", 
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  
  ];
  return (
    <section className='w-full max-w-6xl mx-auto py-16 px-4' id ="testimoials">
      {/*Head*/}
      <div className='text-center'>
        <motion.h2 
          variants = {fadeIn("right" , 0.2)}
          initial = "hidden"
          whileInView="show"
        
        className = "text-3xl md:text-4xl font-bold text-center mb-4">What our happy client say</motion.h2>
        <motion.p
          variants = {fadeIn("left" , 0.2)}
          initial = "hidden"
          whileInView="show" className = "text-gray-700 text-lg">Things that make it the best place to start trading</motion.p>
      </div>
      {/*Testimonials Card*/}
      <div className='py-12'>
<Swiper
        navigation = {{
          nextEl :'.swiper-button-next-custom',
          prevEl :'.swiper-button-prev-custom',
          disabledClass: 'opacity-50 cursor-not-allowed cursor-auto'
        }
        }
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]} // أضف Navigation هنا
        className="mySwiper"
      >
        {testimonials.map((testimonial , index)=>{
          return(
            <SwiperSlide>
              <div 
              className = "p-6 flex flex-col justify-center items-center">
              <img src = {testimonial.image}  className='w-26 h-26 rounded-full my-6'></img>
              <div className = "flex mb-4 ">
              {[...Array(5)].map((_ , starIndex)=>{
                return(
                   <span key = {starIndex}><StarIcon className = "text-amber-400 text-lg"/></span>
                )
               
              })}
              </div>
              <h2 className = "text-2xl mb-3 font-bold ">{testimonial.name}</h2>
              <p className='text-center'>{testimonial.text}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      
      {/*navigational button*/}
      <div className='flex gap-8 text-center mx-auto w-fit mt-8'>
        <motion.button
          variants = {fadeIn("down" , 0.1)}
          initial = "hidden"
          whileInView="show" className='swiper-button-prev-custom p-2 rounded-full shadow-xl border border-gray-100 hover:bg-blue-600 hover:text-white hover:rounded-full cursor-pointer transition-all flex justify-center items-center'><ArrowBackIosNewIcon /></motion.button>
        <motion.button
          variants = {fadeIn("down" , 0.1)}
          initial = "hidden"
          whileInView="show"
         className='swiper-button-next-custom p-2 rounded-full shadow-xl border border-gray-100 hover:bg-blue-600 hover:text-white hover:rounded-full cursor-pointer transition-all flex justify-center items-center'><ArrowForwardIosIcon /></motion.button>
      </div>
      </div>
      

    </section>
  )
}

export default TestimonialsSection