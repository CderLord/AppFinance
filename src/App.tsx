import './App.css'
import ResponsiveAppBar from './tab/tab'
import { MainRouter } from './routes'

function App() {


  return (
    <>
      <ResponsiveAppBar>
        <MainRouter />
      </ResponsiveAppBar>
      
    </>

  )
}

export default App
