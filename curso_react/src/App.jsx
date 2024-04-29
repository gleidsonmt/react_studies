import './App.css'
import HelloWorld from './components/HelloWorld';

function App() {
  
  const name = 'Gleidson'.toUpperCase(); 

  return (
    <>
      <h1>Hello</h1>
      <p>{name}</p>
      <HelloWorld/>
    </>
  )
}

export default App
