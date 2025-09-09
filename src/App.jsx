import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CompanyLogo from "./Components/CompanyLogo"
import PurposeSection from "./Components/PurposeSection"
import FeaturesSection from "./Components/FeaturesSection"
import ScheduleSection from "./Components/ScheduleSection"
import MonitorSection from "./Components/MonitorSection"
import PricingSection from './Components/PricingSec'
import ServicesSection from "./Components/ServicesSection"
import TestimonialsSection from "./Components/TestimonialsSection"
import NewsLetterSection from "./Components/NewsLetterSection"
import FooterSection from "./Components/FooterSection"
import { motion } from "framer-motion";


function App() {


  return (
    <>
    <main className='relative min-h-screen overflow-hidden'>
    <div className = "absolute -top20 -left-20 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20  rounded-full blur-[80px] z-[-100]"></div>
    <div>
    <Navbar />
    <Hero />
    <CompanyLogo />
    <PurposeSection />
    <FeaturesSection />
    <ScheduleSection />
    <MonitorSection />
    <PricingSection />
    <ServicesSection />
    <TestimonialsSection />
    <NewsLetterSection />
    <FooterSection />
    </div>

    </main>
    </>
  )
}

export default App
