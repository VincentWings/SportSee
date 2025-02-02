import sportseeLogo from './assets/sportsee.svg'
import Header from './components/header/Header.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <div>
        <a href="#" target="_blank">
          <img src={sportseeLogo} className="logo" alt="SportSee logo" />
        </a>
      </div>

      <h1>SportSee</h1>

      <div className="card">
        <p>
          test
        </p>
      </div>
    </>
  )
}

export default App
