import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import { Payments } from './components/Payments'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import WhatsAppIcon from './components/Whatsapp'
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [PrimeData, setPrimeData] = useState({})
  useEffect(() => {
    setPrimeData(JsonData)
  }, [])

  return (
    <div>
      <WhatsAppIcon />
      <Navigation />
      <Header data={PrimeData.Header} />
      <Features data={PrimeData.Features} />
      <About data={PrimeData.About} />
      <Services data={PrimeData.Services} />
      <Gallery />
      <Payments data ={PrimeData.Payments} />
      <Testimonials data={PrimeData.Testimonials} />
      {/* <Contact data = {PrimeData.Contact}/> */}
      <Footer />
    </div>
  )
}

export default App
