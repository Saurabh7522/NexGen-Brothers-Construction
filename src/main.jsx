
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Navbar from './navbar.jsx'
import Hero from './hero.jsx'
import VideoSection from './VideoSection.jsx'
import ServicesCards, { services } from './Services.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import ClientCompany from './ClientCompany.jsx'






createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <VideoSection />
    <Hero />
    <buildingSection />
    <ServicesCards services={services} />
    <Projects />
    <ClientCompany />
    <Footer />
    </>
)



