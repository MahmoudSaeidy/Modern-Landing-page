import React from 'react'
import slack from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import woocommerce from "../assets/woocommerce.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"


const CompanyLogo = () => {
    const Logos = [slack ,amazon,woocommerce,meundies ,sitepoint]
  return (<motion.div
  variants={fadeIn("right", 0.2)}
  initial="hidden"
  whileInView="show"
  className="w-full overflow-hidden container mx-auto py-20 gap-12 flex sm:flex-row flex-col items-center"
>
  <div className="sm:w-full md:w-[450px] px-0 md:px-5 text-gray-600 md:border-l-4 md:border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-center md:text-left">
    Proud partner at <br /> Hubspot & Segment
  </div>

  <div className="whitespace-nowrap flex animate-marguee">
    {Logos.map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt="company logo"
        className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
      />
    ))}
    {Logos.map((logo, index) => (
      <img
        key={`double-${index}`}
        src={logo}
        alt="company logo"
        className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
      />
    ))}
  </div>
</motion.div>


  )
}

export default CompanyLogo