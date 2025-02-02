import Header from './components/header/Header'
import Main from './components/main/Main'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'

function App() {
  return (
    <>
      <Header />
      
      <div className="container">
        <Main />
        <Sidebar />
      </div>
    </>
  )
}

export default App
