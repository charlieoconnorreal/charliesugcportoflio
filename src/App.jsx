import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Equipment from './components/Equipment'
import Brands from './components/Brands'
import Results from './components/Results'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Equipment />
        <Brands />
        <Results />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
