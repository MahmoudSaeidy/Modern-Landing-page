import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"

const FooterSection = () => {
      const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }
  return (
    <motion.footer
                        variants = {fadeIn("up" , 0.3)}
                    initial = "hidden"
                    whileInView="show"
    className='bg-gray-50'>
      <div className="px-4 py-16 md:py-24 mx-auto container">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
          {/*brand column*/}
          <div className = "lg:col-span-4 col-span-1">
            <div className="flex gap-3">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
              </div>
              <h2 className="text-bold text-2xl font-bold">The Next Design</h2>
            </div>

            <p className="text-gray-500 mt-4">
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>

            <div className='flex gap-4 mt-4'>
              <div className="bg-gray-200 p-3 rounded-full">
                <FacebookIcon
                  className="cursor-pointer text-gray-600 hover:text-blue-600 hover:scale-130 scale-120 transition-all duration-300"
                  fontSize="medium"
                />
              </div>
              <div className="bg-gray-200 p-3 rounded-full">
                <XIcon
                  className="cursor-pointer text-gray-600 hover:text-black hover:scale-130 scale-120 transition-all duration-300"
                  fontSize="medium"
                />
              </div>
              <div className="bg-gray-200 p-3 rounded-full">
                <LinkedInIcon
                  className="cursor-pointer text-gray-600 hover:text-blue-700 hover:scale-130 scale-120 transition-all duration-300"
                  fontSize="medium"
                />
              </div>
            </div>
          </div>
          {/*footer Nav items*/}
          <div className='lg:col-span-8'>
          <div className = "grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category , links] , categoryIndex)=>{
                return(
                    <div className=' '>
                        <h3 className='text-lg font-medium mb-4 uppercase'>{category}</h3>
                        <div>
                            {links.map((link , index)=>{
                                return(
                                    <a href = {link.href} className='block mb-2 hover:pl-1 hover:text-blue-600 transition-all '>{link.name}</a>
                                )
                            })}
                        </div>
                    </div>
                    )
            })}
          </div>
    </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default FooterSection
