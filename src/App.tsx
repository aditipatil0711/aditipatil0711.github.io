import Sidenav from './components/Sidenav'
import Main from './components/Main' // Import the named export 'Main' instead of default export
import './App.css'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Introduction from './components/Introduction'
import Education from './components/Education'
import Publications from './components/Publications'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Sidenav/>
      <Main/>
      <Introduction/>
      <Education/>
      <Work/>
      <Publications/>
      <Projects/>
      <Achievements/>
      <Resume/>
      <Contact/>
      <Footer/> {/* Add Footer component here */}
    </div>
  )
}

export default App
