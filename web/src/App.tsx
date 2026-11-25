import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { GalleryStrip } from './components/GalleryStrip'
import { Directions } from './components/Directions'
import { Prices } from './components/Prices'
import { Branches } from './components/Branches'
import { Booking } from './components/Booking'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GalleryStrip />
        <Directions />
        <Prices />
        <Branches />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
