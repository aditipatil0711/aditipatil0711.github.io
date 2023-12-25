import Sidenav from './components/Sidenav'
import Main from './components/Main' // Import the named export 'Main' instead of default export
import './App.css'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Introduction from './components/Introduction'

function App() {
  return (
    <div>
      <Sidenav/>
      <Main/>
      <Introduction/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
