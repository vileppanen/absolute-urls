import logo from './logo.svg'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='/foo.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <form action='/foo.html' method='GET'>
        <input type='submit' />
      </form>
    </div>
  )
}

export default App
