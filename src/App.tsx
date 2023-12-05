import Sidenav from './components/Sidenav'
import Main from './components/Main' // Import the named export 'Main' instead of default export
import './App.css'
import Work from './components/Work'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      <Projects/>
    </div>
  )
}

export default App
