import Sidenav from './components/Sidenav'
import Main from './components/Main' // Import the named export 'Main' instead of default export
import './App.css'
import Work from './components/Work'

function App() {
  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
    </div>
  )
}

export default App
