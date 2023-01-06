import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Qualification from './components/Qualification/Qualification'
import ScrollUp from './components/ScrollUp/ScrollUp'
import Skills from './components/Skills/Skills'
import Testimonials from './components/Testimonials/Testimonials'

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollUp/>
      </main>
    </>
  )
}

export default App
