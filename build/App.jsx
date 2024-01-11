import './CSS/App.css';
import './CSS/services.css';
import './CSS/works.css';
import './CSS/contact.css'
import './CSS/footer.css'


import Header from './Header'
import Intro from './Intro'
import About from './About'
import Socials from './Socials'
import Services from './Services'
import Works from './Works'
import Footer from './Footer'

function App() {
 

  return (
    <>
      
    <Header/>
    <main>
          <Intro/>
          <About/>
          <Socials/>
          <Services/>
          <Works/>
           
    </main>
    <Footer/>
    </>
  )
}

export default App
