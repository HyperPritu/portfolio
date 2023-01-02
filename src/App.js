import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
      </main>
    </>
  )
}

export default App
