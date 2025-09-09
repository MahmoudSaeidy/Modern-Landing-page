import React, { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion"



const Navbar = ()=>{
    const [isMenuOpen , setIsMenuOpen] = useState(false)
    const [activeLink , setActiveLink] = useState("#home")

    const navLinks = [
        {href : "#home" , label : "Home"},
        {href : "#about" , label : "About Us"},
        {href : "#services" , label : "Our Service"},
        {href : "#testimoials" , label : "Testimoials"}
    ]
    return (
    <motion.nav
    variants = {fadeIn("down" , 0.2)}
    initial = "hidden"
    whileInView="show"
    viewport={{once : true}}
     className = "fixed top-0 left-0 right-0 bg-white/90 border-b border-gray-100 shadow-sm z-50">
        <div className="w-full container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 md:h-20 h-16">
            {/*Logo*/}
            <div className = "flex items-center gap-1 cursor-pointer">
                <div className = "w-5 h-5 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className = "w-5 h-5 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
            </div>
            {/*Mobile menu Button*/}
            <button className = "cursor-pointer md:hidden p-2" onClick ={()=>{setIsMenuOpen(!isMenuOpen)}}>
                {isMenuOpen ? <CloseIcon fontSize="large"   /> : <MenuIcon fontSize="large" />}
            </button>
            {/*Desktop navitems*/}
            <div className = "hidden md:flex items-center md:gap-5 lg:gap-10">
            {
                navLinks.map((item , index)=>{
                    return(
                        <a key = {index}
                         href = {item.href}
                         onClick = {(()=>{setActiveLink(item.href)})}
                        className = {`md:py-5 md:px-3 lg:p-4 cursor-pointer md:text-sm lg:text-lg font-medium relative after:absolute after:left-0 
                            after:-bottom-3 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all 
                            ${activeLink === item.href ? "text-blue-600 after:w-full" : "text-gray-900 hover:text-blue-600"}`}
                        >{item.label}</a>
                    )
                })
                
            
            }
            </div>
            {/*get in touch btn*/}
                <button className = "hidden md:block md:text-sm lg:text-lg bg-blue-600 text-white px-6 py-3.5 rounded-lg font-medium cursor-pointer hover:bg-blue-700 hover:shadow-lg transition-all hover:shadow-blue-100">
                    <a href = "#Newsletter">Get in touch</a>
                </button>
            {/*Mobile menu*/}

        </div>
        {/*Mobile Menu items*/}
        <div>
            {isMenuOpen && (
                <>
                <motion.div 
        variants = {fadeIn("up" , 0.1)}
          initial = "hidden"
          whileInView="show"  className="md:hidden bg-white border-t border-gray-100 p-4 space-y-6">
                    {navLinks.map((link)=>{
                        return(
                            <div className="container mx-auto p-2 space-y-2">
                        <a onClick = {(()=>{
                            setActiveLink(link.href) 
                            setIsMenuOpen(false)
                        })}
                        className = {`  py-2 block text-md font-medium 
                            ${activeLink === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`} 
                            
                            href = {link.href} >{link.label}</a>
                            </div>)
                    })}
               <button className = "w-full md:hidden bg-blue-600 text-white px-6 py-3.5 rounded-lg font-medium cursor-pointer hover:bg-blue-700 hover:shadow-sm transition-all hover:shadow-blue-600">
                    <a href = "#Newsletter">Get in touch</a>
                </button>
                </motion.div>
                </>
            )}
        </div>
    </motion.nav>
    )
}

export default Navbar