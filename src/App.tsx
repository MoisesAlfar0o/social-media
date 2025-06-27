import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="relative min-h-svh font-inter">
      <div className="absolute top-0 left-0 w-full h-59 bg-light-bg-blue dark:bg-very-dark-bg-blue rounded-b-3xl -z-10" />
      <div className="mx-auto max-w-5xl py-8 px-8 sm:px-8 md:p-8 lg:px-0 relative z-10">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
